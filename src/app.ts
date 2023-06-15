import express, { Request, Response } from 'express';
import { clientError, serverError } from './middlewares';
import therapists from './routes';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use(therapists);
app.use(clientError);
app.use(serverError);

export default app;
