import express, { Request, Response } from 'express';
import { clientError, serverError } from './middlewares';
import appointmentsRouter from './routes/appointment';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/appointments', appointmentsRouter);
app.use(clientError);
app.use(serverError);

export default app;
