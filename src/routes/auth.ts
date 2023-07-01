import { Router } from 'express';
import { login, getAuth } from '../controllers';
import { checkToken } from '../middlewares';

const router = Router();
router.post('/login', login);
router.get('/', checkToken, getAuth);

export default router;
