import express,{type Response,type Request,type NextFunction} from 'express';

export default function validateParams(req:Request,res:Response,next:NextFunction) {
    const {titulo,description,midia,gostei} = req.body;
    if(titulo === null) {
        return res.status(400).json({error:"Digite um Texto válido!"})
    }
    if(midia) {
        try{
            new URL(midia)
        }catch(error) {
            res.status(404).json({error:"Erro ao acessar a URL"})
        }
    }
    if(description === null) {
        return res.status(400).json({error:"Erro:a descrição está vazia!"})
    }

    next();
}