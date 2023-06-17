import express from 'express';
import { clientError, serverError } from './middlewares';
import router from './routes';

const app = express();
app.use(express.json());
app.use('/api/v1', router);
app.use(clientError);
app.use(serverError);

export default app;
