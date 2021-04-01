import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';

import { hash, User } from '../entities/User';

const secret: string = 'what has the hobbit got in its pocketses';

const router: Router = Router();

router.post('/authenticate', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const hashedPassword: string = hash(password);
    const user = await getRepository(User).findOne({ username: username, password: hashedPassword });

    if (user != undefined) {
        const payload = { username };
        const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
        });
        res.cookie('token', token, { httpOnly: true })
           .sendStatus(200);
    } else {
        res.status(401).json({
            error: 'Incorrect username or password'
        })
    }
});

export const AuthController: Router = router;
