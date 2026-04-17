import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
let MONGO_URI = String(process.env.MONGO_URI);
export default async function connectDB() {
    if (!MONGO_URI) {
        console.error("Erro Ao carregar a váriavel de ambiente!");
    }
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Conecção estabelecida com sucesso!");
    }
    catch (error) {
        console.error("Error:", error.message);
        throw new Error("não foi possivel se conectar ao Banco de Dados");
    }
}
//# sourceMappingURL=connectDB.js.map