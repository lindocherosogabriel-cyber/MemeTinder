import express,{type Response,type Request,type NextFunction} from 'express';

interface IMeme {
    title:String;
    description:String;
    midia:String;
    gostei:Number
}

export default function validateParams(req:Request,res:Response,next:NextFunction) {
    
    const {title,description,midia,gostei} = req.body as IMeme;
    if(!title || !description || !midia || !gostei === undefined) {
        return res.status(400).json({ error:"Dados Inválidos!"})
    }
    next()
}