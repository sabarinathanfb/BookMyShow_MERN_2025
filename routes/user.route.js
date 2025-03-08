import express from 'express'
import { createUser,login, deleteUser, getUserDetail, updateUser } from '../controller/user.controller.js';

const router = express.Router();


router.get('/',getUserDetail)
router.post('/signup',createUser)
router.post('/login',login)
router.put('/:userId',updateUser)
router.delete('/userId',deleteUser)

export default router;
 