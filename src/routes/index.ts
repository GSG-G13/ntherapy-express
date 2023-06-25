import { Router } from 'express';
import appointmentsRouter from './appointment';
import therapistRouter from './therapist';
import { findClientSecret } from '../controllers';
import { RolesForSelect } from '../types';
import { checkAuth } from '../middlewares';

const router = Router();

router.use('/appointments', appointmentsRouter);
router.use('/therapists', therapistRouter);
router.post('/payment-intent', checkAuth(RolesForSelect.user), findClientSecret);
export default router;
