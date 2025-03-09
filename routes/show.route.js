import express from 'express'
import AuthMiddleware from '../middleware/auth.middleware.js'
import isTheatreOwnerMiddleware from '../middleware/isTheatreOwner.mdiddleware.js';
import { addShow, updateShow, deleteShow, getShowById, getShowByFilter } from '../controller/show.controller.js';

const router = express.Router();

//Add Show
router.post('/',AuthMiddleware,isTheatreOwnerMiddleware,addShow);

//Update Show
router.put('/:showId', AuthMiddleware,isTheatreOwnerMiddleware,updateShow);
//Delete Show
router.delete(':/showId', AuthMiddleware,isTheatreOwnerMiddleware,deleteShow);
//Get Show by ID
router.get("/:showId", getShowById);

//Get All Show by Movie
//Get All Show by Theatre
router.get('/',getShowByFilter);


export default router;