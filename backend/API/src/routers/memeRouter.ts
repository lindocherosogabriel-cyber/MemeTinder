import express,{type Response,type Request} from 'express';
import postMeme from '../controllers/memeCreate.js';
const MemeRouter = express.Router();

MemeRouter.post("/meme",postMeme);

export default MemeRouter