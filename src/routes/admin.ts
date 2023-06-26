import { Router } from 'express';
import adminLogin from '../controllers/admin';
import { checkAuth } from '../middlewares';
import { RolesForSelect } from '../types';

const router = Router();

router.post('/login', checkAuth(RolesForSelect.admin), adminLogin);

export default router;
