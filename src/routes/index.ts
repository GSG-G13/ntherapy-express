import { Router } from 'express';
import appointmentsRouter from './appointment';

const router = Router();

router.use('/appointments', appointmentsRouter);
export default router;
