import { IUser } from './User';
import { IAuthContext } from './Auth';

interface IAppointment {
    doctor: IUser;
    patient: IUser;
    date: string;
    duration: string;
    pateint_appeared: boolean;
    comment: string;
}

interface IRequest {
    id: string;
    user: IUser;
    symptoms: string[];
    comment: string;

}

export type {
    IUser,
    IAuthContext
}