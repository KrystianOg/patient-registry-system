import { AuthUser } from './User'

interface Auth {
    user: AuthUser | null;
    token: Token | null;
}

interface Token {
    access: string;
    refresh: string;
}

interface SigninCredentials {
	email: string;
	password: string;
}

interface SignupCredentials {
	email: string;
	password: string;
	password2: string;
}

export type {
    Auth,
    Token,
    SigninCredentials,
    SignupCredentials
}