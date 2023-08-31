const {addUserToDb}=require('../models/user');

const registerUser=(req,res)=>{
    const userName="Aastha";
    const password="password";

    const result=addUserToDb(userName,password);
    res.send(result);
}

module.exports={registerUser};