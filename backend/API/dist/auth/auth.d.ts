import { type Request, type Response } from 'express';
declare module 'express-session' {
    interface SessionData {
        refreshToken: String;
    }
}
export default function AuthUser(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=auth.d.ts.map