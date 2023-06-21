import { Router } from 'express';
import appointmentsRouter from './appointment';
import therapistRouter from './therapist';
import { findClientSecret } from '../controllers';

const router = Router();

router.use('/appointments', appointmentsRouter);
router.use('/therapists', therapistRouter);
router.post('/create-payment-intent', findClientSecret);

export default router;
