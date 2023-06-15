import { Router } from 'express';
import appointments from '../controllers/appointment';

const router = Router();
router.get('/:therpaistId', appointments);

export default router;
