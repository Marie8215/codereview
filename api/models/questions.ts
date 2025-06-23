export interface Question {
  id: number;
  stack: string;
  question: string;
  position: string;
  freq: number;
  answer: string | null;
  tags: string;
}

export type QuestionCreate = Omit<Question, 'id'>;

export interface QuestionFilter {
  search?: string;
  stack?: string;
  position?: string;
  tags?: string;
  skip?: number;
  limit?: number;
  sort_by?: string;
  subStack?: string;
  order?: 'asc' | 'desc';
}