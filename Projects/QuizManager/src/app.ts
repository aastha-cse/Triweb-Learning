import express from 'express';
import mongoose from 'mongoose';

import UserRoute from './routes/user';

const app=express();

const connectionString="mongodb+srv://guptaaastha824:1234@cluster0.xdho994.mongodb.net/quizzdb?retryWrites=true&w=majority";

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello");
})

app.use('/user',UserRoute);

mongoose.connect(connectionString);

app.listen(3000);