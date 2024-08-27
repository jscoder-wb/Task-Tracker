import { Router } from 'express';
const router = Router();

import {
  getTasks,
  setTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';
import protect from '../middleware/authMiddleware.js';

router.route('/').get(protect, getTasks).post(protect, setTask);
router.route('/:id').put(protect, updateTask).delete(protect, deleteTask);

export default router;
