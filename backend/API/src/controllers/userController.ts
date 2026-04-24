import {type Response,type Request} from 'express';
import User from '../connect/Models/UserModel.js';

export default async function register(req:Request,res:Response) {
    try{
        const {nickname,password,email,role} = req.body;
        const newUser = new User({nickname,password,email,role});
        await newUser.save()
        return res.status(200).json(newUser)
    }catch(error){
        console.log(error)
        res.status(500).json({error:"Erro ao se registrar!"});
    }
}

