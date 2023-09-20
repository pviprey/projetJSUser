import { PathOrFileDescriptor, readFileSync, writeFileSync } from 'fs';
import { FileHandler } from './handle-file.interface';
import { FileBdd } from './file-bdd.enum';
import { User } from '../../usr/user';

const path = './bdd/';

export class FileHandlerImpl implements FileHandler{
    private filePath!: PathOrFileDescriptor;
        
    constructor(fileName: FileBdd) {
        switch(fileName) {
            case FileBdd.User:
                this.filePath = path + 'user.json';
                break;
            default:
                throw new Error('File not found.');
        }
    }

    public read(): User[] {
        let buffer = readFileSync(this.filePath, 'utf8');
        let users = JSON.parse(buffer.toString()) as User[];

        return users;
    }

    public write(value: User): void {
        writeFileSync(this.filePath, JSON.stringify(value));
    }
}