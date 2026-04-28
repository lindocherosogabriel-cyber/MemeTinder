import express, {} from 'express';
import postMeme from '../controllers/memeCreate.js';
import validateParams from '../connect/middleware/valParameters.js';
import multer from 'multer';
const MemeRouter = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/tmp/uploads');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + "-" + uniqueSuffix);
    }
});
const upload = multer({ storage: storage });
MemeRouter.post("/meme", validateParams, upload.single("midia"), postMeme);
export default MemeRouter;
//# sourceMappingURL=memeRouter.js.map