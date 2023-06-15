import express from 'express';
import getTherapistById from '../controllers';

const router = express.Router();

router.get('/therapist/:id', getTherapistById);

export default router;
