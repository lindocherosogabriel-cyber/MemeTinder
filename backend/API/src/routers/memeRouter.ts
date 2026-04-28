import express,{type Response,type Request} from 'express';
import postMeme from '../controllers/memeCreate.js';
import validateParams from '../connect/middleware/valParameters.js';
import multer from 'multer';
const MemeRouter = express.Router();
const upload = multer({ dest:"uploads/" })

MemeRouter.post("/meme",validateParams,upload.single("midia"),postMeme);

export default MemeRouter;