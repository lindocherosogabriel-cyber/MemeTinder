import express, {} from 'express';
import register from '../controllers/userController.js';
const UserRouter = express.Router();
UserRouter.post("/register-user", register);
export default UserRouter;
//# sourceMappingURL=userRouter.js.map