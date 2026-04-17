import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
let MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/memeDB";
export default async function connectDB() {
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