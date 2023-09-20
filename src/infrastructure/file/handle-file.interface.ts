export interface FileHandler {
    read(): any;
    write(value: any): any;
}