import jwt, { type JwtPayload } from 'jsonwebtoken';
import {type Request,type Response,type NextFunction} from 'express'
import dotenv from 'dotenv';
import Cookies from 'js-cookie';
dotenv.config();
export default function tokenValidation(req:Request,res:Response,next:NextFunction) {

    const authHeader = req.header("Authorization");
    if(!authHeader) {
        return res.status(401).json({error:"Token não fornecido."});
    }

    const [scheme,token] = authHeader.split(" ");
    if(scheme !== "Bearer" || !token) {
        return res.status(401).json({error:"Token não fornecido."});
    }

    try{
        const secret_key = process.env.SECRET_KEY
        const stringKey = String(secret_key);
        const verifyToken = jwt.verify(token,stringKey) as JwtPayload;
        Cookies.set("token",token,{expires: 7});
        next();
    }catch(error) {
        return res.status(401).json({error:"Token Inválido."});
    }
}
