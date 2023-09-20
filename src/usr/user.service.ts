import { FileBdd } from '../infrastructure/file/file-bdd.enum';
import { FileHandler } from '../infrastructure/file/handle-file.interface';
import { FileHandlerImpl } from '../infrastructure/file/file-handler.service';
import { User } from './user';
import { UserInterface } from './user.interface';

export class UserService implements UserInterface {
    private fileHandler!: FileHandler;
    constructor() {
        this.fileHandler = new FileHandlerImpl(FileBdd.User);
    }

    add(username: string): User {
        const user = new User(this.getFutureId(), username);
        let users = this.getAll().concat(user);
        this.fileHandler.write(users);
        return user;
    }

    getById(id: number): User | undefined {
        const users = this.getAll();
        return users.find((user: User) => user.id === id);
    }

    private getAll(): User[] {
        return this.fileHandler.read();
    }

    private getFutureId(): number {
        const users = this.getAll();
        if(users.length > 0) {
            const latestUser = users[users.length - 1];
            return latestUser.id + 1;
        }

        return 0;
    }
}