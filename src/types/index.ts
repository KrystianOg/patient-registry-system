import { User } from './User';
import { Auth, Token } from './Auth';

interface IAppointment {
    doctor: User;
    patient: User;
    date: string;
    duration: string;
    pateint_appeared: boolean;
    comment: string;
}

interface IRequest {
    id: string;
    user: User;
    symptoms: string[];
    comment: string;

}

export type {
    User,
    Auth,
    Token
}