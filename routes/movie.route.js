import express from 'express';
import AuthMiddleware from '../middleware/auth.middleware.js'
import isAdminMiddleware from '../middleware/isAdmin.middleware.js'
import { addMovie, deleteMovie, getAllMovie, getMovieById, updateMovie } from '../controller/movie.controller.js';

const router = express.Router();

//Add Movie
router.post('/',AuthMiddleware,isAdminMiddleware,addMovie);

//Get All Movie
router.get('/',getAllMovie);

//Get Movie By Id
router.get('/:movieId',getMovieById);

//update Movie
router.put('/:movieId',AuthMiddleware,isAdminMiddleware,updateMovie);

//Delete Movie
router.delete('/:movieId',AuthMiddleware,isAdminMiddleware,deleteMovie);

export default router;

