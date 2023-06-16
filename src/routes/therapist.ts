import express from 'express';
import { findTherapistById, getAllTherapists } from '../controllers';

const router = express.Router();

router.get('/:id', findTherapistById);
router.get('/', getAllTherapists);

export default router;
