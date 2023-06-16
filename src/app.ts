import express, { Request, Response } from 'express';
import { clientError, serverError } from './middlewares';
import Router from './routes';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use(Router);
app.use(clientError);
app.use(serverError);

export default app;
