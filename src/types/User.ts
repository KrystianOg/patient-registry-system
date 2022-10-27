enum UserType {
    ADMIN = 'Admin',
    MODERATOR = 'Moderator',
    DOCTOR = 'Doctor',
    PATIENT = 'Patient'
}

interface BaseUser {
    id: number;
    email: string;
    first_name?: string;
    last_name?: string;
    username: string;
}

interface AuthUser extends BaseUser {
    types: UserType[]; 
    with_google: boolean;
    vacation_mode: boolean;
    prefer_dark_mode: boolean;
    doctor_changes_appointment: boolean;
    doctor_deletes_appointment: boolean;
    doctor_accepts_appointment: boolean;
}

export type {
    BaseUser,
    AuthUser
}

export {
    UserType
}