import type { User } from './User'

interface Appointment {
    id: number;
    doctor: User;
    patient: User;
    date: Date;
    duration: number;
    symptoms: string[];
    patientAppeared: boolean;
    comment: string;
}

export type {
    Appointment
}