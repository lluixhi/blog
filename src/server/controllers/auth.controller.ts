import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import * as auth from '../services/auth.service';
import { checkPassword } from '../services/users.service';

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const secret = uuidv4();

    try {
        await checkPassword(username, password);
        await auth.addLogin(username, secret);
        res.cookie('session', secret, { httpOnly: true })
           .sendStatus(200);
    } catch (err) {
        res.status(401).json({
            error: err.toString()
        })
    }
}

export const logout = async (req: Request, res: Response) => {
    try {
        await auth.removeLogin(req.cookies.session);
    } catch (err) {
        res.status(500).json({
            error: err.toString()
        })
    }
}

export const okay = async (req: Request, res: Response) => {
    try {
        await auth.getLogin(req.cookies.session);
        res.sendStatus(200);
    } catch (err) {
        res.status(403).json({
            error: err.toString()
        })
    }
}