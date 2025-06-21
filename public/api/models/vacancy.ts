export interface Vacancy {
    id: number;
    active: boolean;
    external_id?: string | null;
    company_name: string;
    title: string;
    salary: string;
    location: string;
    speciality: string;
    url: string;
    description: string;
    source: string;
    image?: string | null;
    date_publication: string;
}

export interface VacancyCreate {
    active?: boolean;
    external_id?: string | null;
    company_name: string;
    title: string;
    salary: string;
    location: string;
    speciality: string;
    url: string;
    description: string;
    source: string;
    image?: string | null;  
}

export interface VacancyFilter {
    search?: string;
    speciality?: string;
    location?: string;
    company_name?: string;
    skip?: number;
    limit?: number;
    sort_by?: string;
    order?: 'asc' | 'desc';
}