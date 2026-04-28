import memeModel from "../connect/Models/MemeModel.js";
import {type Response,type Request} from 'express';
import multer from 'multer';
export default async function postMeme(req:Request,res:Response) {
    try{
        const {description,titulo,midia,gostei} = req.body;
        const newMeme = new memeModel({titulo,description,midia,gostei})
        await newMeme.save();
        return res.status(201).json(newMeme)
    }catch(error){
        res.status(500).json({error:"Erro ao instanciar um novo meme!"})
    }
}