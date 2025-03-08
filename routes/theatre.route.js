import express from 'express';
import AuthMiddleware from '../middleware/auth.middleware.js'
import { addTheatre, deleteTheatre, getAllTheatre, getTheatreById, updateTheatre } from '../controller/theatre.controller.js';

const router = express.Router();

//Add Theatre
router.post('/',AuthMiddleware,addTheatre);

//Get Theatre By Owners
//Get All Theatre
router.get('/',getAllTheatre);

//Get Theatre By Id
router.get('/:theatreId',getTheatreById);

//update Theatre
router.put('/:theatreId',updateTheatre);

//Delete Theatre
router.delete('/:theatreId',deleteTheatre);

export default router;