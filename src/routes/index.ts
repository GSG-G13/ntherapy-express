import express from 'express';
import therapistRouter from './therapist';

const router = express.Router();

router.use('/therapists', therapistRouter);

export default router;
