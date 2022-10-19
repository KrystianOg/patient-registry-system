import type { User } from './User'

interface Request {
    id: number;
    patient: User;
    symptoms: string[]
}

export type {
    Request
}