const express=require('express');

const router=express.Router();



router.post('/add',(req,res)=>{
    res.send("user service");
});

module.exports=router;