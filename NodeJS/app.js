const express=require('express');
const userRoute=require('./routers/user');
const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("this is response");
});

app.use('/user',userRoute);

app.listen(3000);
