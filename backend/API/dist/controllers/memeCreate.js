import memeModel from "../connect/Models/MemeModel.js";
import {} from 'express';
export default async function postMeme(req, res) {
    try {
        const { description, titulo, midia, gostei } = req.body;
        const newMeme = new memeModel({ titulo, description, midia, gostei });
        await newMeme.save();
        return res.status(201).json(newMeme);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao instanciar um novo meme!" });
    }
}
//# sourceMappingURL=memeCreate.js.map