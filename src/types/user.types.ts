
type Gender = 'MALE' | 'FEMALE' | 'OTHER' | null;

export type User = {
    name: string;
    email?: string;
    phoneNumber: string;
    profileUrl: string | null;
    gender?: Gender;  // Assuming Gender is an enum
    roleId?: number;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type UserPayload = {
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
}