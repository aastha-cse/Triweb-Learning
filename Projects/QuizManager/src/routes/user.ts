import express from 'express';
import { registerUser, getUser, updateUser } from '../controllers/user';

const router=express.Router();

router.post('/',registerUser);

router.get('/:userId',getUser);

router.put('/',updateUser);

export default router;