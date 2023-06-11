import express, { Request, Response } from 'express';
import { clientError, serverError } from './middlewares/ErrorMiddleware';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(clientError);
app.use(serverError);

export default app;
