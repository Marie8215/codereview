export interface Vacancy {
  id: number;
  active: boolean;
  external_id: string | null;
  company: VacancyCompany;
  title: string;
  salary?: string;
  location?: VacancyLocation;
  speciality: string;
  internship: boolean;
  remote: boolean;
  url: string;
  description: string;
  source: string;
  image: string | null;
  date_publication: string; // ISO 8601 date-time string
}

export type VacancyCreate = Omit<Vacancy, "date_publication" | "id" | "location"> & {
  location: string;
};

export interface VacancyFilter {
  search?: string;
  speciality?: string;
  location?: string;
  company_name?: string;
  internship?: boolean;
  remote?: boolean;
  skip?: number;
  limit?: number;
  sort_by?: string;
  source?: string;
  order?: "asc" | "desc";
}

export interface VacancyCompany {
  id: number;
  name: string;
  description: string;
}

export interface VacancyLocation {
  raw?: string;
  city?: string;
  description?: string;
}
