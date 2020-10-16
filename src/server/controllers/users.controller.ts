import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../entities/User';

const router: Router = Router();

router.get('/users', async (req: Request, res: Response) => {
    // Return all users
    const users = await getRepository(User).find();
    res.json(users);
});

router.get('/users/:id', async (req: Request, res: Response) => {
    // Return one user
    const results = await getRepository(User).findOne(req.params.id);
    res.json(results);
});

router.post('/users', async (req: Request, res: Response) => {
    // Save one user
    const user = getRepository(User).create(req.body);
    const results = await getRepository(User).save(user);
    return res.send(results);
});

router.put('/users/:id', async (req: Request, res: Response) => {
    // Update 1 user
    const user = await getRepository(User).findOne(req.params.id);
    if (user != undefined) {
        getRepository(User).merge(user, req.body);
        const results = await getRepository(User).save(user);
        return res.send(results);
    }
});

router.delete('/users/:id', async (req: Request, res: Response) => {
    // Delete 1 user
    const results = await getRepository(User).delete(req.params.id);
    return res.send(results);
});

export const UserController: Router = router;