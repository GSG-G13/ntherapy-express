import { Router } from 'express';
import appointmentsRouter from './appointment';
import therapistRouter from './therapist';
import userRouter from './userLogin';

const router = Router();

router.use('/appointments', appointmentsRouter);
router.use('/therapists', therapistRouter);
router.use('/userLogin', userRouter);// aute

export default router;
