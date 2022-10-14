import { IUser } from './User'

interface IAuthContext {
    user?: IUser;
    accessToken: string;
    refreshToken: string;
}

export type {
    IAuthContext
}