import { User } from './user';
import { UserInterface } from './user.interface';

export class UserController {
    constructor(private userService: UserInterface) {}

    add(username: string): User {
        // is the username empty ?
        // is the username whitespaced ?
        // other checks...
        if(username === '' || username === ' '){
            throw new Error('Username cannot be empty');
        }
        
        return this.userService.add(username);
    }

    getById(id: number): User | undefined {
        // is the id a decimal ?
        // is the id a negative number ?
        // other checks...
        if(id < 0){
            throw new Error('Id cannot be negative');
        }
        if(id.toString().includes('.')){
            throw new Error('Id cannot be decimal');
        }

        return this.userService.getById(id);
    }
}