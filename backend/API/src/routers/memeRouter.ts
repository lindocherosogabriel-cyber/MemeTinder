import express,{type Response,type Request,type NextFunction} from 'express';
import postMeme from '../controllers/memeCreate.js';
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

MemeRouter.post("/meme",postMeme,upload.single("midia"),(req:Request,res:Response,next:NextFunction) => {
    console.log(req.file)
});

export default MemeRouter;