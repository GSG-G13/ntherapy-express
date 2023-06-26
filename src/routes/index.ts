import { Router } from 'express';
import appointmentsRouter from './appointment';
import therapistRouter from './therapist';
import adminRouter from './admin';

const router = Router();

router.use('/appointments', appointmentsRouter);
router.use('/therapists', therapistRouter);
router.use('/admin', adminRouter);

export default router;
