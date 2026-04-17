import mongoose from 'mongoose';
export default async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/memeDB");
        console.log("Conecção estabelecida com sucesso!");
    }
    catch (error) {
        throw new Error("não foi possivel se conectar ao bacno de dados");
    }
}
//# sourceMappingURL=connectDB.js.map