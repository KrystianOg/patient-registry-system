import type { BaseUser } from './User'

interface Request {
    id: number;
    patient: BaseUser;
    symptoms: string[];
    comment: string
}

export type {
    Request
}