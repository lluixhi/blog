import { User } from '../entities/User';
import { Login } from '../entities/Login';
import { getRepository } from 'typeorm';

export const addLogin = async (username: string, secret: string) => {
    const user = await getRepository(User).findOne({ username: username });
    if (user != undefined) {
        const login = new Login();
        login.username = username;
        login.token = secret;
        await getRepository(Login).save(login);
    } else {
        throw new Error('User not found');
    }
}

export const removeLogin = async (secret: string) => {
    const login = await getRepository(Login).delete({ token: secret });
    if (login == undefined) {
        throw new Error('User is not logged in');
    }
}

export const getLogin = async (secret: string) => {
    const login = await getRepository(Login).findOne({ token: secret });
    if (login != undefined) {
        const username = login.username;
        return { username };
    } else {
        throw new Error('User is not logged in');
    }
}