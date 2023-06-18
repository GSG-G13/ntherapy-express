import express from 'express';
import { findTherapistById, getAllTherapists } from '../controllers';
import { checkAuth } from '../middlewares';
import { RolesForSelect } from '../types';

const router = express.Router();

router.get('/test-auth', checkAuth(RolesForSelect.user), (req, res) => {
  res.json('hi auth');
});
router.get('/:id', findTherapistById);
router.get('/', getAllTherapists);

export default router;
