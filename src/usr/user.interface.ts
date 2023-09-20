import {User} from './user';

export interface UserInterface {
    add(user: string): User;
    getById(id: number): User | undefined;
}