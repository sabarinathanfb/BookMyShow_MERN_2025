import express from 'express'
import { getAllBlog,getBlogById,updateBlogById ,createBlog, deleteBlogId } from '../controller/blog.controller.js';

const router = express.Router();

 

router.get('/:blogId',getBlogById);
router.get('/',getAllBlog);
router.post("/",createBlog)
router.put("/:blogId",updateBlogById)

router.delete('/:blogId',deleteBlogId)


export default router;
