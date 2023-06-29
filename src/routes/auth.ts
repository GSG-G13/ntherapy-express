import { Router } from 'express';
import { login, getAuth } from '../controllers';
import { checkToken } from '../middlewares';

const router = Router();
router.post('/login', login);
router.get('/login', checkToken(), getAuth);

export default router;
