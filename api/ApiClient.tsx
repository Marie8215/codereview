import { ApiResponse } from "./models/base";
import {
  QuestionsEndpoint,
  VacanciesEndpoint,
  AuthEndpoint,
} from "./models/endpoints";
import { Question, QuestionCreate, QuestionFilter } from "./models/questions";
import { Vacancy, VacancyCreate, VacancyFilter } from "./models/vacancy";
import {
  TokenResponse,
  UserCredentialsData,
  User,
  UserRegisterResponse,
} from "./models/auth";
import { PaginatedResponse } from "./models/pagination";
import { fixLocation } from "./utils/fixLocation";

class ApiClient {
  private baseUrl: string;
  private accessToken: string | null = null;
  public questions: QuestionsEndpoint;
  public vacancies: VacanciesEndpoint;
  public auth: AuthEndpoint;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.questions = this.createQuestionsEndpoint();
    this.vacancies = this.createVacanciesEndpoint();
    this.auth = this.createAuthEndpoint();

    if (typeof window !== "undefined") {
      this.accessToken = localStorage.getItem("accessToken");
    }
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (this.accessToken) {
      headers["Authorization"] = `Bearer ${this.accessToken}`;
    }

    return headers;
  }

  private async fetch<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    try {
      console.info(`Fetching: ${this.baseUrl}${endpoint}`, options);
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        cache: "force-cache",
        next: {
          revalidate: 60, // 1 minute
        },
        ...options,
        headers: {
          ...this.getHeaders(),
          ...options?.headers,
        },
      });

      console.info(`[RESPONSE]: ${this.baseUrl}${endpoint}`, response.status);

      if (!response.ok) {
        return {
          isSuccess: false,
          error: {
            message: "Network response was not ok",
            code: response.status,
          },
        };
      }

      const data = await response.json();
      return {
        isSuccess: true,
        response: data,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: {
          message: error instanceof Error ? error.message : "Unknown error",
          code: 500,
        },
      };
    }
  }

  private createQuestionsEndpoint(): QuestionsEndpoint {
    return {
      get: async (filter?: QuestionFilter | undefined) => {
        const params = new URLSearchParams();
        if (filter) {
          Object.entries(filter).forEach(([key, value]) => {
            if (value !== undefined && key !== "stack" && key !== "subStack") {
              // Пропускаем stack, т.к. сервер некорректно его обрабатывает
              // Пропускаем subStack, т.к. сервер не поддерживает его
              params.append(key, value.toString());
            }
          });
        }
        // Set default values as per OpenAPI spec
        if (!params.has("skip")) params.append("skip", "0");
        if (!params.has("limit")) params.append("limit", "10");
        if (!params.has("order")) params.append("order", "asc");

        const result = await this.fetch<PaginatedResponse<Question>>(
          `/questions/?${params.toString()}`
        );

        if (!filter?.stack) return result;

        if (!result.isSuccess || !result.response) {
          return {
            isSuccess: false,
            error: result.error || {
              message: "Failed to fetch sources",
              code: 500,
            },
          };
        }

        // сервер не поддерживает фильтрацию по stack, делаем на клиенте
        console.warn(
          "Опасная фильтрация на клиенте, может занимать много времени"
        );
        result.response.items = result.response.items
          .filter((question) =>
            question.stack?.includes(filter.stack!.toLowerCase())
          )
          .slice(filter.skip, (filter.skip || 0) + 7);

        return result;
      },
      getById: (id: number | string) =>
        this.fetch<Question>(`/questions/${id}`),
      create: (question: QuestionCreate) =>
        this.fetch<Question>("/questions/", {
          method: "POST",
          body: JSON.stringify(question),
        }),
      update: (id: number, question: Question) =>
        this.fetch<Question>(`/questions/${id}`, {
          method: "PUT",
          body: JSON.stringify(question),
        }),
      delete: (id: number) =>
        this.fetch<void>(`/questions/${id}`, {
          method: "DELETE",
        }),
      getStacks: async () => {
        const result = await this.fetch<PaginatedResponse<Question>>(
          "/questions/?limit=100"
        );
        if (!result.isSuccess || !result.response) {
          return {
            isSuccess: false,
            error: result.error || {
              message: "Failed to fetch stacks",
              code: 500,
            },
          };
        }

        const stacks = [
          ...new Set(
            result.response.items
              .flatMap((question) => question.stack?.split(" ") || [])
              .filter(Boolean)
          ),
        ].sort();

        return {
          isSuccess: true,
          response: stacks,
        };
      },

      getGrades: async () => {
        const result = await this.fetch<PaginatedResponse<Question>>(
          "/questions/?limit=100"
        );
        if (!result.isSuccess || !result.response) {
          return {
            isSuccess: false,
            error: result.error || {
              message: "Failed to fetch grades",
              code: 500,
            },
          };
        }

        const grades = [
          ...new Set(
            result.response.items
              .map((question) => question.position)
              .filter(Boolean)
          ),
        ].sort();

        return {
          isSuccess: true,
          response: grades,
        };
      },
    };
  }

  private createVacanciesEndpoint(): VacanciesEndpoint {
    return {
      get: async (filter?: VacancyFilter) => {
        // фильтр по source не будет работать (сервер его не поддерживает)
        const params = new URLSearchParams();
        if (filter) {
          Object.entries(filter).forEach(([key, value]) => {
            if (value !== undefined) {
              params.append(key, value.toString());
            }
          });
        }

        if (!params.has("skip")) params.append("skip", "0");
        if (!params.has("limit")) params.append("limit", "7");
        if (!params.has("order")) params.append("order", "asc");

        const response = await this.fetch<PaginatedResponse<Vacancy>>(
          `/vacancies/?${params.toString()}`,
          {
            next: {
              revalidate: 60,
              tags: ["vacancies"],
            },
          }
        );

        if (!response.isSuccess) return response;

        response.response?.items.forEach((item) => {
          item.location = fixLocation(item.location);
        });

        return response;
      },
      getById: async (id: number) => {
        const response = await this.fetch<Vacancy>(`/vacancies/${id}`);

        if (!response.isSuccess) return response;

        if (response.response) {
          response.response.location = fixLocation(response.response?.location);
        }

        return response;
      },
      create: async (vacancy: VacancyCreate) => {
        const response = await this.fetch<Vacancy>("/vacancies/", {
          method: "POST",
          body: JSON.stringify(vacancy),
        });

        if (!response.isSuccess) return response;

        return response;
      },
      update: (id: number, vacancy: Vacancy) =>
        this.fetch<Vacancy>(`/vacancies/${id}`, {
          method: "PUT",
          body: JSON.stringify(vacancy),
        }),
      delete: (id: number) =>
        this.fetch<void>(`/vacancies/${id}`, {
          method: "DELETE",
        }),

      getLocations: async () => {
        // для этого должен быть отдельный эндпоинт, но пока используем что есть
        const result = await this.fetch<PaginatedResponse<Vacancy>>(
          "/vacancies/?limit=200",
          {
            next: {
              revalidate: 3600,
            },
          }
        );
        if (!result.isSuccess || !result.response) {
          return {
            isSuccess: false,
            error: result.error || {
              message: "Failed to fetch locations",
              code: 500,
            },
          };
        }

        const locations = [
          ...new Set(
            result.response.items
              .map((vacancy) => {
                const location = fixLocation(vacancy.location);
                return location?.city || location?.raw || undefined!;
              })
              .filter((location) => location) // Remove nulls/undefined
          ),
        ].sort();

        return {
          isSuccess: true,
          response: locations,
        };
      },

      getSources: async () => {
        // для этого должен быть отдельный эндпоинт, но пока используем что есть
        const result = await this.fetch<PaginatedResponse<Vacancy>>(
          "/vacancies/?limit=100"
        );
        if (!result.isSuccess || !result.response) {
          return {
            isSuccess: false,
            error: result.error || {
              message: "Failed to fetch sources",
              code: 500,
            },
          };
        }

        const sources = [
          ...new Set(
            result.response.items
              .map((vacancy) => vacancy.source)
              .filter((source) => source) // Remove nulls/undefined
          ),
        ].sort();

        return {
          isSuccess: true,
          response: sources,
        };
      },
    };
  }

  private createAuthEndpoint(): AuthEndpoint {
    return {
      login: async (data: UserCredentialsData) => {
        // todo здесь выполнять запрос без кэша!
        // const tokenData: TokenResponse = {
        //   access_token: "faketoken_ " + data.username,
        //   token_type: "Bearer",
        // };

        const formData = new URLSearchParams();
        formData.append("username", data.username);
        formData.append("password", data.password);

        const response = await fetch(`${this.baseUrl}/auth/token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData,
          cache: "no-cache", // Отключаем кэш для этого запроса
        });

        if (!response.ok) {
          return {
            isSuccess: false,
            error: {
              message: "Login failed",
              code: response.status,
            },
          };
        }

        const tokenData: TokenResponse = await response.json();

        // Сохраняем токен
        this.accessToken = tokenData.access_token;
        if (typeof window !== "undefined") {
          localStorage.setItem("accessToken", tokenData.access_token);
        }

        return {
          isSuccess: true,
          response: tokenData,
        };
      },

      register: async (data: UserCredentialsData) => {
        return this.fetch<UserRegisterResponse>("/auth/register/", {
          method: "POST",
          body: JSON.stringify(data),
        });
      },

      getCurrentUser: () => this.fetch<User>("/auth/users/me/"),
    };
  }

  public logout(): void {
    this.accessToken = null;
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
    }
  }

  public isAuthenticated(): boolean {
    return !!this.accessToken;
  }
}

export const apiClient = new ApiClient("http://jobs.yourcodereview.com:8005");
