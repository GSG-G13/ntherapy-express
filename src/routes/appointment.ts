import { Router } from 'express';
import appointments from '../controllers/appointment';

const router = Router();
router.get('/:therapistId', appointments);

export default router;
