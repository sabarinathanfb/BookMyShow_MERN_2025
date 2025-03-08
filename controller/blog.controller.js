import fs from 'fs'
import Blog from '../model/blog.model.js';

export const getAllBlog = async (req, res) => {
    try {
        // Fetch all blogs from MongoDB
        const blogData = await Blog.find();

        // Send the data as JSON
        res.status(200).json(blogData);

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export const createBlog = async (req, res) => {
    try {
        const newBlogData = req.body;

        const data = await Blog.create(newBlogData);

        res.status(201).json({ message: "Blog Created Successfully", blog: newBlogData });

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export const getBlogById = async (req, res) => {
    try {
        const blogId = req.params.blogId;
        console.log(blogId);

        const blog = await Blog.findById(blogId)

        if (blog) {
            res.status(200).json(blog);
        } else {
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export const deleteBlogId = async (req, res) => {
    try {
        const blogId = req.params.blogId;

        // Delete the blog from the database
        const deletedBlog = await Blog.findByIdAndDelete(blogId);

        if (!deletedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ message: "Blog deleted successfully" });

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};



export const updateBlogById = async (req, res) => {
    try {
        const newBlogData = req.body;
        const blogId = req.params.blogId;


        // Update the blog in the database
        const updatedBlog = await Blog.findByIdAndUpdates(
            blogId,
            { $set: newBlogData },
            { new: true, runValidators: true }
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ message: "Blog updated successfully", blog: updatedBlog });

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export const renderBlogs = async (req,res) =>{

    const blogs = await Blog.find();
    res.render('blogList', {blogs});
}
export const renderBlogById = async (req,res) =>{

    const blogId = req.params.blogId;
    const blog = await Blog.findById(blogId)
    res.render('blogDetail', {blog});
}