import { ApiResponse } from "./base";
import { Question, QuestionFilter, QuestionCreate } from "./questions";
import { Vacancy, VacancyCreate, VacancyFilter } from "./vacancy";
import { TokenResponse, LoginData, User } from "./auth";
import { PaginatedResponse } from "./pagination";

export interface QuestionsEndpoint {
  get: (filter?: QuestionFilter) => Promise<ApiResponse<PaginatedResponse<Question>>>;
  getById: (id: number | string) => Promise<ApiResponse<Question>>;
  create: (question: QuestionCreate) => Promise<ApiResponse<Question>>;
  update: (id: number, question: Question) => Promise<ApiResponse<Question>>;
  delete: (id: number) => Promise<ApiResponse<void>>;
  getStacks: () => Promise<ApiResponse<string[]>>;
  getGrades: () => Promise<ApiResponse<string[]>>;
}

export interface VacanciesEndpoint {
  get(filter?: VacancyFilter): Promise<ApiResponse<PaginatedResponse<Vacancy>>>;
  getById(id: number | string): Promise<ApiResponse<Vacancy>>;
  create(vacancy: VacancyCreate): Promise<ApiResponse<Vacancy>>;
  update(id: number, vacancy: Vacancy): Promise<ApiResponse<Vacancy>>;
  delete(id: number): Promise<ApiResponse<void>>;

  getLocations(): Promise<ApiResponse<string[]>>;
  getSources(): Promise<ApiResponse<string[]>>;
}

export interface AuthEndpoint {
  login(data: LoginData): Promise<ApiResponse<TokenResponse>>;
  getCurrentUser(): Promise<ApiResponse<User>>;
}
