import express from 'express';
import getTherapistById from '../controllers';

const router = express.Router();

router.get('/:id', getTherapistById);

export default router;
