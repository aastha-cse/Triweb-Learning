module.exports.add=(req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    let sum=n1+n2;
    res.send("sum="+sum);
};

module.exports.sub=(req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    let diff=n1-n2;
    res.send("diff="+diff);
};

module.exports.mul=(req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    let mul=n1*n2;
    res.send("mul="+mul);
};

module.exports.div=(req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    let div=n1/n2;
    res.send("div="+div);
};