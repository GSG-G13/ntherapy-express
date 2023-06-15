import express from 'express';
import { clientError, serverError } from './middlewares';
import router from './routes/therapist';

const app = express();

app.use('/api/v1', router);
app.use(clientError);
app.use(serverError);

export default app;
