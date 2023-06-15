import express from 'express';
import therapistInfo from '../controllers';

const router = express.Router();

router.get('/therapist/:id', therapistInfo);

export default router;
