import type { BaseUser } from './User'

interface Appointment {
    id: number;
    doctor: BaseUser;
    patient: BaseUser;
    date: Date;
    duration: string;
    symptoms?: string[];
    patientAppeared?: boolean;
    comment?: string;
}

interface CreateAppointment extends Omit<Appointment, 'doctor' | 'patient' | 'id' | 'date'| 'duration'> {
    patient: number;
    doctor: number;
    date: string;
    duration: string;
    request: number;
}

export type {
    Appointment,
    CreateAppointment
}