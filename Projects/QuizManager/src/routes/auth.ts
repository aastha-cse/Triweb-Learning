import express from 'express';
import { registerUser, loginUser, isUserExist } from '../controllers/auth';
import { body } from 'express-validator';

const router=express.Router();

router.post('/', [
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({min:4})
        .withMessage("Please enter a valid name"),
    body('email')
        .trim()
        .isEmail()
        .custom((emailId:String)=>{
            return isUserExist(emailId)
                .then((status:Boolean)=>{
                    if(status){
                        return Promise.reject("User Already Exists");
                    }
                })
                .catch((err)=>{
                    return Promise.reject(err);
                })
        }),
    body('password')
        .trim()
        .isLength({min:5})
        .withMessage("Password length should be atleast 5 characters"),
    body('confirm_password')
        .trim()
        .custom((value:String,{req})=>{
            if(value!=req.body.password){
                return Promise.reject("Password mismatch");
            }
            return true;
        })
], registerUser);

router.post('/login',loginUser);

export default router;