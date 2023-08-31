import { Request, Response } from 'express';

import {addUserToDb} from '../models/user';

const registerUser=(req:Request,res:Response)=>{
    const userName="Aastha";
    const password="password";

    const result=addUserToDb(userName,password);
    res.send(result);
}

export {registerUser};