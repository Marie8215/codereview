export interface ApiResponse<T> {
  isSuccess: boolean;
  error?: ApiError;
  response?: T;
}

export interface ApiError {
  message: string;
  code: number;
}
