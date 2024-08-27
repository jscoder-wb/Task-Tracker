import { Router } from 'express';
const router = Router();

import {
  registerUser,
  loginUser,
  getMe,
} from '../controllers/userController.js';
import protect from '../middleware/authMiddleware.js';

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

export default router;
