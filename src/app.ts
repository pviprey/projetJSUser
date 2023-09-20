import { ExpressApplication } from "./infrastructure/express-application";

const app = new ExpressApplication();
app.bootstrap();