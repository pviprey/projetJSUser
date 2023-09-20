import { Router } from 'express';
import { UserInterface } from '../usr/user.interface';
import { UserController } from '../usr/user.controller';
import { UserRouter } from '../usr/user.router';

export class ExpressRouter {
    router = Router();

    private userController!: UserController;
    private userRouter!: UserRouter;

    constructor(private userService: UserInterface) {
        this.configureControllers();
        this.configureRouters();
        this.configureRoutes();
    }

    private configureControllers(): void {
        this.userController = new UserController(this.userService);
    }

    private configureRouters(): void {
        this.userRouter = new UserRouter(this.userController);
    }

    private configureRoutes(): void {
        this.router.use('/user', this.userRouter.router);
    }
}