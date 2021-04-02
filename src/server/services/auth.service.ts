import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secret: string = 'what has the hobbit got in its pocketses';

export const withAuth = async (req: Request, res: Response, next: NextFunction) => {
    const authCookie = req.cookies.authtoken;

    jwt.verify(authCookie, secret, (err: jwt.VerifyErrors | null, decoded: any) => {
        if (err) {
            res.sendStatus(403);
        } else if (decoded.username) {
            req.user.username = decoded.username;
            next();
        }
    })
}