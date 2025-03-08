import express from 'express';
import UserRoutes from './routes/user.route.js'
import BlogRotes from './routes/blog.route.js'
import connectToDB from './database/mongoDb.js';
import { renderBlogs,renderBlogById } from './controller/blog.controller.js';

const app = express();

app.set('view engine','ejs');

app.use(express.json());
app.use('/api/user',UserRoutes)
app.use('/api/blog',BlogRotes)
app.get('/blog/list', renderBlogs)
app.get('/blog/:blogId/:title', renderBlogById)

app.all('*',(req,res)=>{
    res.status(404).send("Page Not Found!:")
})

app.listen(5005,()=>{
    console.log("Server is Running on 5005");
    connectToDB();
})