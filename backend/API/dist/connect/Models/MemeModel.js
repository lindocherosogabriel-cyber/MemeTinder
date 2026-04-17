import mongoose from "mongoose";
const { Schema } = mongoose;
const memeSchema = new Schema({
    titulo: {
        type: String,
        required: [true, 'o titulo é requerido!'],
        minlength: [3, 'O mínimo de caracteres são 3!'],
    },
    description: {
        type: String,
    },
    midia: {
        type: String,
        required: [true, 'porfavor inclua uma URL válida!']
    },
    gostei: {
        type: Number
    },
}, {
    timestamps: true
});
const memeModel = mongoose.model('MemeLove', memeSchema);
export default memeModel;
//# sourceMappingURL=MemeModel.js.map