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
module.exports.update=async(req,res)=>{
    let status=await userModel.update(req.body);
    if(status){
        res.send({status:"success",data:{message:"User data updated"}});
    }else{
        res.send({status:"error",message:"User data not updated"});
    }
}

//delete
module.exports.delete=(req,res)=>{
    res.send(req.body);
}