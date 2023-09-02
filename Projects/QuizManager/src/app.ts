import express from 'express';
import UserRoute from './routes/user';
const app=express();

app.get('/',(req,res)=>{
    res.send("hello");
})

app.use('/user',UserRoute);

app.listen(3000);