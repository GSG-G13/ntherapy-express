import { Router } from 'express';
import { checkAuth } from '../middlewares';
import { RolesForSelect } from '../types';
import { getAllBugs, createNewBug } from '../controllers/bug';

const router = Router();

router.get('/', checkAuth(RolesForSelect.admin), getAllBugs);
router.post('/', createNewBug);

export default router;
