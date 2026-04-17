import {} from 'express';
import User from '../connect/Models/UserModel.js';
export default async function register(req, res) {
    try {
        const { nickname, password, email } = req.body;
        const newUser = new User({ nickname, password, email });
        await newUser.save();
        return res.status(200).json(newUser);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro ao se registrar!" });
    }
}
//# sourceMappingURL=userController.js.map