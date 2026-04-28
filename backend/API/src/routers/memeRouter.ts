import express,{type Response,type Request} from 'express';
import postMeme from '../controllers/memeCreate.js';
import validateParams from '../connect/middleware/valParameters.js';
import multer from 'multer';
const MemeRouter = express.Router();

const storage = multer.diskStorage({
    destination:(req:Request,file:Express.Multer.File,cb:(error: Error | null,destination: string) => void) => {
        cb(null, '/tmp/uploads');
    },
    filename: (req:Request,file:Express.Multer.File,cb: (error: Error | null,destination: string) => void) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null,file.fieldname + "-" + uniqueSuffix);
    }
})


const upload = multer({ storage: storage});

MemeRouter.post("/meme",validateParams,upload.single("midia"),postMeme);

export default MemeRouter;