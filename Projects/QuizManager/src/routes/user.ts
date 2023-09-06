import express from 'express';
import { registerUser, getUser } from '../controllers/user';

const router=express.Router();

router.post('/',registerUser);

router.get('/:userId',getUser);

export default router;