import { Router } from 'express';
import { checkAuth } from '../middlewares';
import { RolesForSelect } from '../types';
import { getAllBugs, createNewBug, editBug } from '../controllers/bug';

const router = Router();

router.get('/', checkAuth(RolesForSelect.admin), getAllBugs);
router.post('/', createNewBug);
router.patch('/', checkAuth(RolesForSelect.admin), editBug);

export default router;
