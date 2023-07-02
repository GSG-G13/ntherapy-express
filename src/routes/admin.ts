import { Router } from 'express';
import { adminLogin, getTherapistsForAdmin } from '../controllers';
import { checkAuth } from '../middlewares';
import { RolesForSelect } from '../types';

const router = Router();

router.post('/login', adminLogin);
router.get('/therapists', checkAuth(RolesForSelect.admin), getTherapistsForAdmin);

export default router;
