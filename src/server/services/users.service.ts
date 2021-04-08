import { getRepository } from 'typeorm';
import { comparePassword, User } from '../entities/User';

export const checkPassword = async (username: string, password: string) => {
    const user = await getRepository(User).findOne({ username: username });
    if (user != undefined) {
        if (!comparePassword(password, user.password)) {
            throw new Error('Incorrect password')
        }
    } else {
        throw new Error('User not found');
    }
};