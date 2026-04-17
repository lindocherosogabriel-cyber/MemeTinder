import mongoose from "mongoose";
const { Schema } = mongoose;
const UserSchema = new Schema({
    "nickname": {
        type: String,
        required: [true, "Por favor digite um nickname."],
        minlength: [2, "Por favor digite um nickname com o mínimo de 2 caracteres!"]
    },
    "password": {
        type: String,
        required: [true, "Por favor digite uma Senha!"],
        unique: [true, "Essa senha já existe crie outra senha!"]
    },
    "email": {
        type: String,
        required: [true, "Digite um email Válido!"],
        unique: [true, "Digite um email diferente!"]
    }
});
const User = mongoose.model("User", UserSchema);
export default User;
//# sourceMappingURL=UserModel.js.map