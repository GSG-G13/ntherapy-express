import express from 'express';
import { findTherapistById, getAllTherapists, updateTherapistProfile } from '../controllers';
import { checkAuth } from '../middlewares';
import { RolesForSelect } from '../types';

const router = express.Router();

router.get('/test-auth', checkAuth(RolesForSelect.user), (req, res) => {
  res.json('hi auth');
  router.get('/', getAllTherapists);
});
router.get('/:id', findTherapistById);
router.patch('/:id', checkAuth(RolesForSelect.therapist), updateTherapistProfile);
export default router;
