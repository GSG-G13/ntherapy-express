import { Router } from 'express';
import appointmentsRouter from './appointment';
import therapistRouter from './therapist';
import userRouter from './auth';

const router = Router();

router.use('/appointments', appointmentsRouter);
router.use('/therapists', therapistRouter);
router.use('/auth', userRouter);

export default router;
