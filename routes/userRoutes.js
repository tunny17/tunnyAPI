import express from 'express';
import {
  deleteUser,
  getUsers,
  getUsersById,
  updateUser,
} from '../controllers/userControllers.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();

// controllers are functions that are called when we hit certain endpoints

router.get('/', auth, getUsers);
router.get('/:id', auth, getUsersById);
router.patch('/:id', auth, updateUser);
router.delete('/:id', auth, deleteUser);

export default router;
