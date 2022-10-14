enum UserType {
    ADMIN = 1,
    MODERATOR = 2,
    DOCTOR = 3,
    PATIENT = 4
}

interface IUser {
    id: string;
    type: UserType; 
    first_name: string;
    last_name: string;
    email: string;
    username: string;
}

export type {
    IUser,
    UserType
}