import express, { Request, Response } from 'express';
import { clientError, serverError } from './middlewares';
import router from './routes/therapist';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use(router);
app.use(clientError);
app.use(serverError);

export default app;
