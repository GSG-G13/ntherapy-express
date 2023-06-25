import { Router } from 'express';
import { userLoginController } from '../controllers';

const router = Router();
router.post('/', userLoginController);

export default router;
