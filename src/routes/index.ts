import { Router } from 'express';
import appointmentsRouter from './appointment';
import therapistRouter from './therapist';

const router = Router();

router.use('/appointments', appointmentsRouter);
router.use('/therapists', therapistRouter);

export default router;
