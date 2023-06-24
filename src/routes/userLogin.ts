import { Router } from 'express';
// import { RolesForSelect } from '../types';
// import { checkAuth } from '../middlewares';
import { userLoginController } from '../controllers';

const router = Router();
router.post('/', userLoginController);
// router.post('/', checkAuth(RolesForSelect.therapist), userLoginController);

export default router;
