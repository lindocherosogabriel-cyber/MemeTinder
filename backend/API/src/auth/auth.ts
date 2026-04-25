import User from '../connect/Models/UserModel.js'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {type Request,type Response} from 'express';
import session  from 'express-session';

declare module 'express-session'{
    interface SessionData {
        refreshToken:String
    }
}

interface Variables {
    refreshToken:String,

}


export default async function AuthUser(req:Request,res:Response) {
    const {email,password} = req.body;
    dotenv.config();

    const secret_key = process.env.SECRET_KEY

    try{
       
        const user = await User.findOne({ email,password });

        if (!user) {
            return res.status(401).json({message: "Usuário ou senha inválidos"});
        }
        
        const token = jwt.sign(
            { id: user._id, email:user.email, role:user.role},
            `${secret_key}`,
            { expiresIn: '1d' }
        );


       // const refresh = jwt.sign({email: user.email,role:user.role,},`${secret_key}`,{ expiresIn: '7d' });
       // req.session.refreshToken = refresh;
       // res.json({access,refresh})


         return res.status(200).json({
         user: {
             email: user.email,
         },
         token
        })


    }catch(error){
        console.error(error);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
}


//export function Refresh(req:Request,res:Response) {
   // const {token} = req.body;
   // if (!token) return res.status(200).json({error:"Acesso negado."});
   // const newToken = jwt.sign({email:user.email})
//}