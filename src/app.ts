import express, { Request, Response } from 'express';
import { clientError, serverError } from './middlewares';
import mainRouter from './routes';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use(mainRouter);
app.use(clientError);
app.use(serverError);

export default app;
