import { Router,type Request,type Response,type NextFunction } from "express";
import session from "express-session";
import multer from "multer";
import path from "node:path";
declare module "express-session" {
    interface SessionData {
        uploaded?: any;
    }
}

type DestinationCallBack = (error: Error | null, destination: string) => void;

type FileNameCallBack = (error:Error | null,filename: string) => void;

const storage = multer.diskStorage({
    destination: (req:Request,file:Express.Multer.File,cb: DestinationCallBack) => {
        cb(null,"./midiaUP/");
    },
    filename: (req:Request,file:Express.Multer.File,cb:FileNameCallBack) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null,`${file.fieldname}-${uniqueSuffix}${ext}`);

    }
})


const upload = multer({ storage })

const midiaRouter = Router();

midiaRouter.post("/uploadmidia",upload.single("midia"),(req:Request,res:Response,next:NextFunction) => {
    try {
        const FILE = req.file;
        req.session.uploaded = FILE?.filename;
        res.status(200).json({message:"Sucesso! ao enviar a midia!"});
        next()
    } catch (error:any) {
        res.status(500).json({error:"Erro ao fazer upload do arquivo!",
            message:error.message
        });
    }
});

export default midiaRouter;