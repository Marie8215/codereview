import { ApiResponse } from './base';
import { Question, QuestionFilter, QuestionCreate } from './questions';
import { Vacancy, VacancyCreate, VacancyFilter } from './vacancy';
import { TokenResponse, LoginData, User } from './auth';

export interface QuestionsEndpoint {
  get(filter?: QuestionFilter): Promise<ApiResponse<Question[]>>;
  getById(id: number): Promise<ApiResponse<Question>>;
  create(question: QuestionCreate): Promise<ApiResponse<Question>>;
  update(id: number, question: Question): Promise<ApiResponse<Question>>;
  delete(id: number): Promise<ApiResponse<void>>;
}

export interface VacanciesEndpoint {
  get(filter?: VacancyFilter): Promise<ApiResponse<Vacancy[]>>;
  getById(id: number): Promise<ApiResponse<Vacancy>>;
  create(vacancy: VacancyCreate): Promise<ApiResponse<Vacancy>>;
  update(id: number, vacancy: Vacancy): Promise<ApiResponse<Vacancy>>;
  delete(id: number): Promise<ApiResponse<void>>;
}

export interface AuthEndpoint {
  login(data: LoginData): Promise<ApiResponse<TokenResponse>>;
  getCurrentUser(): Promise<ApiResponse<User>>;
}