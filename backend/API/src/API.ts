import express, {type Response,type Request, type NextFunction} from 'express';
import connectDB from './connect/connectDB.js';
import memeModel from './connect/Models/MemeModel.js';
import MemeRouter from './routers/memeRouter.js';
import UserRouter from './routers/userRouter.js';
import Authrouter from './auth/router/authRouter.js'
import tokenValidation from './auth/middleware/authMiddleware.js';
import midiaRouter from './controllers/midia.js';
import User from './connect/Models/UserModel.js';
import cors from 'cors';
import dotenv from 'dotenv';
import session from 'express-session';

const app = express();
dotenv.config();


const PORT = process.env.PORT
const API_KEY = process.env.API_KEY
connectDB();

app.use(express.json());
app.use(cors({
    origin:'*'
}));
app.use(session({
    secret:`${API_KEY}`,
    resave: false,
    saveUninitialized: false,
    cookie: { secure:false },
}));

app.use("/api",midiaRouter);
app.use("/api",Authrouter);
app.use("/api",MemeRouter);
app.use("/api",UserRouter);


app.get("/api/meme", async (req:Request,res:Response) => {
    try{
       const meme = await memeModel.find()
       res.json(meme);
    }catch(error){
        res.status(500).json({error:"Error ao procurar Memes!"})
    }
});

app.get("/api/meme/:id", (req:Request,res:Response,next:NextFunction) => {
    try{
        const {id} = req.params;
        const meme = memeModel.findById(id);
        if (!meme) {
            return res.status(404).json({error:"Error ao Procurar o meme pelo id"});
        }
        res.json(meme);
    }catch(error){
        next(error);
    }
});

app.get("/api/meme", async (req:Request,res:Response) => {
    try {
        const memes = await memeModel.find();
        res.status(200).json(memes);
    } catch (error:any) {
        res.status(404).json({error:"Erro ao procurar todos os memes"})
    }
});


app.get("/api/register-user/", async (req:Request,res:Response) => {
    try{
       const user = await User.find();
       res.json(user);
    }catch(error){
        res.status(500).json({error:"Error ao procurar registros!"})
    }
});


app.get("/api/user/:id", (req:Request,res:Response,next:NextFunction) => {
    try{
        const {id} = req.params;
        const user = User.findById(id);
        if (!user) {
            return res.status(404).json({error:"Error ao Procurar o resgistro pelo id"})
        }
        res.json(user)
    }catch(error){
        next(error);
    }
});
// terminar a rota de DELETAR todos os usúarios.
app.delete("/api/varrer/:api_key",async (req:Request,res:Response) => {
    try{
        let {api_key} = req.params;
        if(api_key === API_KEY) {
            await User.deleteMany({});
        }
    }catch(error){
        res.status(500).json({error:"Erro ao tentar deletar o banco inteiro!"})
    }
});

app.delete("/api/varrerMemes/",async (req:Request,res:Response) => {
    try{
        await memeModel.deleteMany({});
    }catch(error) {
        res.status(500).json({error:"Error:Erro ao tentar varrer os memes todos."})
    }
});

app.get("/api/token",tokenValidation,(req:Request,res:Response) => {
    res.status(200).json({message:"Token Válido!"});
});

app.listen(PORT,() => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
});