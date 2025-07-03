/* eslint-disable @typescript-eslint/no-unused-vars */

import { ApiResponse } from "./models/base";
import {
  QuestionsEndpoint,
  VacanciesEndpoint,
  AuthEndpoint,
} from "./models/endpoints";
import { Question, QuestionCreate, QuestionFilter } from "./models/questions";
import { Vacancy, VacancyCreate, VacancyFilter } from "./models/vacancy";
import { TokenResponse, UserCredentialsData, UserRegisterResponse } from "./models/auth";
import { PaginatedResponse } from "./models/pagination";
import { mockUser } from "./mocks/mockData";
import { mockQuestions } from "./mocks/questions";
import { mockVacancies } from "./mocks/vacancies";

class MockApiClient {
  private accessToken: string | null = null;
  public questions: QuestionsEndpoint;
  public vacancies: VacanciesEndpoint;
  public auth: AuthEndpoint;

  constructor() {
    this.questions = this.createQuestionsEndpoint();
    this.vacancies = this.createVacanciesEndpoint();
    this.auth = this.createAuthEndpoint();
  }

  private createSuccessResponse<T>(data: T): ApiResponse<T> {
    return {
      isSuccess: true,
      response: data,
    };
  }

  private filterData<T>(items: T[], search: string, fields: (keyof T)[]): T[] {
    if (!search) return items;
    const searchLower = search.toLowerCase();
    return items.filter((item) =>
      fields.some((field) =>
        String(item[field]).toLowerCase().includes(searchLower)
      )
    );
  }

  private paginateData<T>(
    items: T[],
    skip: number = 0,
    limit: number = 10
  ): PaginatedResponse<T> {
    return {
      items: items.slice(skip, skip + limit),
      total: items.length + 1,
      skip,
      limit,
    };
  }

  private createQuestionsEndpoint(): QuestionsEndpoint {
    return {
      get: (filter?: QuestionFilter) => {
        let filteredData = [...mockQuestions];

        if (filter?.search) {
          filteredData = this.filterData(filteredData, filter.search, [
            "question",
            "stack",
            "position",
            "tags",
          ]);
        }

        const paginatedData = this.paginateData(
          filteredData,
          filter?.skip,
          filter?.limit
        );

        return Promise.resolve(this.createSuccessResponse(paginatedData));
      },
      getById: (id: number | string) => {
        const question = mockQuestions.find((q) => q.id === id);

        return Promise.resolve(this.createSuccessResponse(question!));
      },
      create: (question: QuestionCreate) => {
        const newQuestion = {
          ...question,
          id: mockQuestions.length + 1,
        };
        return Promise.resolve(this.createSuccessResponse(newQuestion));
      },
      update: (id: number, question: Question) => {
        return Promise.resolve(this.createSuccessResponse(question));
      },
      delete: (id: number) => {
        return Promise.resolve(this.createSuccessResponse(undefined));
      },
      getStacks: function (): Promise<ApiResponse<string[]>> {
        throw new Error("Function not implemented.");
      },
      getGrades: function (): Promise<ApiResponse<string[]>> {
        throw new Error("Function not implemented.");
      },
    };
  }

  private createVacanciesEndpoint(): VacanciesEndpoint {
    return {
      get: (filter?: VacancyFilter) => {
        let filteredData = [...mockVacancies].slice(0, 7);

        if (filter?.search) {
          filteredData = this.filterData(filteredData, filter.search, [
            "title",
            "description",
            "speciality",
          ]);
        }

        const paginatedData = this.paginateData(
          filteredData,
          filter?.skip,
          7
        );

        return Promise.resolve(this.createSuccessResponse(paginatedData));
      },
      getById: (id: number) => {
        const vacancy = mockVacancies.find((v) => v.id === id);
        return Promise.resolve(this.createSuccessResponse(vacancy!));
      },
      create: (vacancy: VacancyCreate) => {
        const newVacancy = {
          ...vacancy,
          id: mockVacancies.length + 1,
          date_publication: new Date().toISOString(),
        };
        return Promise.resolve(this.createSuccessResponse(newVacancy));
      },
      update: (id: number, vacancy: Vacancy) => {
        return Promise.resolve(this.createSuccessResponse(vacancy));
      },
      delete: (id: number) => {
        return Promise.resolve(this.createSuccessResponse(undefined));
      },
      getLocations: function (): Promise<ApiResponse<string[]>> {
        throw new Error("Function not implemented.");
      },
      getSources: function (): Promise<ApiResponse<string[]>> {
        throw new Error("Function not implemented.");
      },
    };
  }

  private createAuthEndpoint(): AuthEndpoint {
    return {
      login: async (data: UserCredentialsData) => {
        this.accessToken = "mock_token";
        const tokenResponse: TokenResponse = {
          access_token: this.accessToken,
          token_type: "bearer",
        };
        return this.createSuccessResponse(tokenResponse);
      },
      getCurrentUser: () => {
        return Promise.resolve(this.createSuccessResponse(mockUser));
      },

      register: async (data: UserCredentialsData) => {
        return Promise.resolve({} as ApiResponse<UserRegisterResponse>);
      },
    };
  }

  public logout(): void {
    this.accessToken = null;
  }

  public isAuthenticated(): boolean {
    return !!this.accessToken;
  }
}

export const mockApiClient = new MockApiClient();
