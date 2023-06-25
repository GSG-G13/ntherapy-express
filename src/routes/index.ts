import { Router } from 'express';
import appointmentsRouter from './appointment';
import therapistRouter from './therapist';
import sessionRouter from './session';

const router = Router();

router.use('/appointments', appointmentsRouter);
router.use('/therapists', therapistRouter);
router.use('/session', sessionRouter);

export default router;
