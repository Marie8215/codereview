export interface QuestionFilter {
  search?: string;
  stack?: string;
  position?: string;
  tags?: string;
  skip?: number;
  limit?: number;
  sort_by?: string;
  order?: 'asc' | 'desc';
}

export interface Question {
  id: number;
  title: string;
  stack: string;
  difficulty: string;
  frequency: number;
  answer?: string | null;
  position?: string | null;
  company?: string | null;
  tags?: string | null;
}

export interface QuestionCreate {
  title: string;
  stack: string;
  difficulty: string;
  answer?: string | null;
  position?: string | null;
  company?: string | null;
  tags?: string | null;
}