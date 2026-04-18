import express, {} from 'express';
import postMeme from '../controllers/memeCreate.js';
const MemeRouter = express.Router();
MemeRouter.post("/meme", postMeme);
export default MemeRouter;
//# sourceMappingURL=memeRouter.js.map