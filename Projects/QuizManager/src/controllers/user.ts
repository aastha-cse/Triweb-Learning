import { Request, Response } from "express";

const registerUser=(req:Request,res:Response)=>{
    console.log("Done");
    res.send("Done")
}

export {registerUser};