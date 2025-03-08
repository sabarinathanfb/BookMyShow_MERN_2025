import express from 'express';
import UserRoutes from './routes/user.route.js'
import TheatreRoutes  from './routes/theatre.route.js';
import connectToDB from './database/mongoDb.js';

import dotenv from "dotenv";

const app = express();
dotenv.config();

app.set('view engine','ejs');

app.use(express.json());

app.use('/api/user',UserRoutes)
app.use('/api/theatre',TheatreRoutes)

app.all('*',(req,res)=>{
    res.status(404).send("Page Not Found!:")
})

app.listen(5005,()=>{
    console.log("Server is Running on 5005");
    connectToDB();
})