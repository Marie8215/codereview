export interface TokenResponse {
    access_token: string;
    token_type: string;
}

export interface UserCredentialsData {
    username: string;
    password: string;
}

export interface User {
    id: number;
    email: string;
    username: string;
    is_active: boolean;
    is_superuser: boolean;
}

export interface UserRegisterResponse {
    details: string;
}