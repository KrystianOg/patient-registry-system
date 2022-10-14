interface IUser {
    id: string;
    type: number | string; // TODO: check that, or enum
    first_name: string;
    last_name: string;
    email: string;
    username: string;
}

export type {
    IUser
}