import { Router, Request, Response } from 'express';
import { getConnection } from 'typeorm';

import { User } from '../entities/User';

const router: Router = Router();

const userRepository = getConnection().getRepository(User);

router.get('/users', async (req: Request, res: Response) => {
    // Return all users
    const users = await userRepository.find();
    res.json(users);
});

router.get('/users/:id', async (req: Request, res: Response) => {
    // Return one user
    const results = await userRepository.findOne(req.params.id);
    res.json(results);
});

router.post('/users', async (req: Request, res: Response) => {
    // Save one user
    const user = userRepository.create(req.body);
    const results = await userRepository.save(user);
    return res.send(results);
});

router.put('/users/:id', async (req: Request, res: Response) => {
    // Update 1 user
    const user = await userRepository.findOne(req.params.id);
    if (user != undefined) {
        userRepository.merge(user, req.body);
        const results = await userRepository.save(user);
        return res.send(results);
    }
});

router.delete('/users/:id', async (req: Request, res: Response) => {
    // Delete 1 user
    const results = await userRepository.delete(req.params.id);
    return res.send(results);
});

export const UserController: Router = router;