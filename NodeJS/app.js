const express=require('express');
const calculatorRouter=require('./routers/calculator');
const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("this is response");
});

// app.get('/add',(req,res)=>{
//     let a=3;
//     let b=4;
//     let sum=a+b;
//     res.send("sum="+sum);
// });

app.use('/calculator',calculatorRouter);

app.listen(3000);
