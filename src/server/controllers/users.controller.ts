import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../entities/User';

export const getAllUsers = async (req: Request, res: Response) => {
    // Return all users
    const users = await getRepository(User).find();
    res.json(users);
}

export const getOneUser = async (req: Request, res: Response) => {
    // Return one user
    const results = await getRepository(User).findOne(req.params.id);
    res.json(results);
}

export const saveOneUser = async (req: Request, res: Response) => {
    // Save one user
    const user = getRepository(User).create(req.body);
    const results = await getRepository(User).save(user);
    return res.send(results);
}

export const updateOneUser = async (req: Request, res: Response) => {
    // Update 1 user
    const user = await getRepository(User).findOne(req.params.id);
    if (user != undefined) {
        getRepository(User).merge(user, req.body);
        const results = await getRepository(User).save(user);
        return res.send(results);
    }
}

export const deleteOneUser = async (req: Request, res: Response) => {
    // Delete 1 user
    const results = await getRepository(User).delete(req.params.id);
    return res.send(results);
}