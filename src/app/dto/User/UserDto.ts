import { ObjectID } from "typeorm"
export interface UserDto {
    id: ObjectID;
    name: string;
    lastname: string;
    email: string;
    password?: string;
    birth_date: string;
    created_at: Date;
    updated_at: Date;
}