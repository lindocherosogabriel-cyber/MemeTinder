import User from '../connect/Models/UserModel.js'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {type Request,type Response} from 'express';
export default async function AuthUser(req:Request,res:Response) {
    const {email,password} = req.body;
    dotenv.config();

    const secret_key = process.env.SECRET_KEY

    try{
       
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({message: "Usuário ou senha inválidos"});
        }
        
        const token = jwt.sign(
            { id: user._id, email:user.email },
            `${secret_key}`,
            { expiresIn: '1d' }
        );

        return res.status(200).json({
            user: {
                id: user._id,
                name: user.nickname,
                email: user.email
            },
            token
        })

    }catch(error){
        console.error(error);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
}