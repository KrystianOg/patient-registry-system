import { User } from './User'

interface Auth {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
}

interface Token {
    accessToken: string | null;
    refreshToken: string | null;
}

export type {
    Auth,
    Token
}