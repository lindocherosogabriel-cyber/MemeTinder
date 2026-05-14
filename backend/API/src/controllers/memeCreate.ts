import memeModel from "../connect/Models/MemeModel.js";
import {type Response,type Request,type NextFunction} from 'express';
import session from "express-session";
export default async function postMeme(req:Request,res:Response,next:NextFunction) {
    try{
        const {description,titulo,midia,gostei} = req.body;
        const newMeme = new memeModel({titulo,description,midia:req.session.uploaded,gostei});
        await newMeme.save();
        return res.status(201).json(newMeme);
    }catch(error){
        res.status(500).json({error:"Erro ao instanciar um novo meme!"});
    }
}