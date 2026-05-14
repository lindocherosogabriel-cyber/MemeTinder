import express,{type Response,type Request,type NextFunction} from 'express';
import postMeme from '../controllers/memeCreate.js';
import validateParams from '../connect/middleware/valParameters.js';
const MemeRouter = express.Router();

MemeRouter.post("/meme",validateParams,postMeme);

export default MemeRouter;