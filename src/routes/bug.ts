import { Router } from 'express';
import { checkAuth } from '../middlewares';
import { RolesForSelect } from '../types';
import {
  getAllBugs, createNewBug, editBug, createIssue, deleteBug,
} from '../controllers';

const router = Router();

router.get('/', checkAuth(RolesForSelect.admin), getAllBugs);
router.post('/', createNewBug);
router.patch('/', checkAuth(RolesForSelect.admin), editBug);
router.post('/github', checkAuth(RolesForSelect.admin), createIssue);
router.delete('/', checkAuth(RolesForSelect.admin), deleteBug);

export default router;
