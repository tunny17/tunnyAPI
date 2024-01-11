import express from 'express';
import { login, logout, register } from '../controllers/authController.js';

const router = express.Router();

// controllers are functions that are called when we hit certain endpoints

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

export default router;
