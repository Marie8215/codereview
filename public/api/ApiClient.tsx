import { ApiResponse } from "./models/base";
  import { QuestionsEndpoint, VacanciesEndpoint, AuthEndpoint } from "./models/endpoints";
import { Question, QuestionCreate, QuestionFilter } from "./models/questions";
import { Vacancy, VacancyCreate, VacancyFilter } from "./models/vacancy";
import { TokenResponse, LoginData, User } from "./models/auth";

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

    // Попытка восстановить токен из localStorage
    if (typeof window !== 'undefined') {
      this.accessToken = localStorage.getItem('accessToken');
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
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          ...this.getHeaders(),
          ...options?.headers,
        },
      });

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
      get: (filter?: QuestionFilter) => {
        const params = new URLSearchParams();
        if (filter) {
          Object.entries(filter).forEach(([key, value]) => {
            if (value !== undefined) params.append(key, value.toString());
          });
        }
        return this.fetch<Question[]>(`/questions/?${params.toString()}`);
      },
      getById: (id: number) => this.fetch<Question>(`/questions/${id}`),
      create: (question: QuestionCreate) =>
        this.fetch<Question>('/questions/', {
          method: 'POST',
          body: JSON.stringify(question),
        }),
      update: (id: number, question: Question) =>
        this.fetch<Question>(`/questions/${id}`, {
          method: 'PUT',
          body: JSON.stringify(question),
        }),
      delete: (id: number) =>
        this.fetch<void>(`/questions/${id}`, {
          method: 'DELETE',
        }),
    };
  }

  private createVacanciesEndpoint(): VacanciesEndpoint {
    return {
      get: (filter?: VacancyFilter) => {
        const params = new URLSearchParams();
        if (filter) {
          Object.entries(filter).forEach(([key, value]) => {
            if (value) params.append(key, value.toString());
          });
        }
        return this.fetch<Vacancy[]>(`/vacancies/?${params.toString()}`);
      },
      getById: (id: number) => this.fetch<Vacancy>(`/vacancies/${id}`),
      create: (vacancy: VacancyCreate) =>
        this.fetch<Vacancy>("/vacancies/", {
          method: "POST",
          body: JSON.stringify(vacancy),
        }),
      update: (id: number, vacancy: Vacancy) =>
        this.fetch<Vacancy>(`/vacancies/${id}`, {
          method: "PUT",
          body: JSON.stringify(vacancy),
        }),
      delete: (id: number) =>
        this.fetch<void>(`/vacancies/${id}`, {
          method: "DELETE",
        }),
    };
  }

  private createAuthEndpoint(): AuthEndpoint {
    return {
      login: async (data: LoginData) => {
        const formData = new URLSearchParams();
        formData.append('username', data.username);
        formData.append('password', data.password);

        const response = await fetch(`${this.baseUrl}/auth/token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData,
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
        if (typeof window !== 'undefined') {
          localStorage.setItem('accessToken', tokenData.access_token);
        }

        return {
          isSuccess: true,
          response: tokenData,
        };
      },

      getCurrentUser: () => this.fetch<User>('/auth/users/me/'),
    };
  }

  public logout(): void {
    this.accessToken = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessToken');
    }
  }

  public isAuthenticated(): boolean {
    return !!this.accessToken;
  }
}

export const apiClient = new ApiClient("http://jobs.yourcodereview.com:8005/");
