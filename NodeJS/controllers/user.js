const userModel=require('../models/user');

//register
module.exports.register=async(req,res)=>{
    let insertedId=await userModel.insert(req.body);
    if(insertedId){
        res.send({status:"success",data:{id:insertedId}});
    }else{
        res.send({status:"error",message:"User registration failed"});
    }
}

//get
module.exports.get=async(req,res)=>{
    let data=await userModel.get(req.body);
    if(data){
        res.send({status:"success",data:{data:data}});
    }else{
        res.send({status:"error",message:"User not found"});
    }
}

//update
module.exports.update=(req,res)=>{
    res.send(req.body);
}

//delete
module.exports.delete=(req,res)=>{
    res.send(req.body);
}