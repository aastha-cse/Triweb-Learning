const express=require('express');
const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("this is response");
});

app.get('/add',(req,res)=>{
    let a=3;
    let b=4;
    let sum=a+b;
    res.send("sum="+sum);
});

app.post('/add',(req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    let sum=n1+n2;
    res.send("sum="+sum);
});

app.post('/sub',(req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    let diff=n1-n2;
    res.send("diff="+diff);
});

app.post('/mul',(req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    let mul=n1*n2;
    res.send("mul="+mul);
});

app.post('/div',(req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    let div=n1/n2;
    res.send("div="+div);
});

app.listen(3000);
