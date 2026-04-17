import AuthUser from "../auth.js";
import Router from 'express';
const Authrouter = Router();
Authrouter.post('/login', AuthUser);
export default Authrouter;
//# sourceMappingURL=authRouter.js.map