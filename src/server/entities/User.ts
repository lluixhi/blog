import crypto from 'crypto';
import { Entity, Column, PrimaryColumn, OneToMany, OneToOne, BeforeInsert, BeforeUpdate, JoinColumn } from 'typeorm';

import { Post } from './Post';
import { Login } from './Login';

const salt: string = 'picklejuice';

@Entity()
export class User {
    @PrimaryColumn()
    username!: string;

    @Column()
    password!: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        if (this.password) {
            this.password = hash(this.password);
        }
    }

    @Column()
    email!: string;

    @OneToMany('Post', 'user')
    posts!: Post[];

    @OneToOne(() => Login)
    @JoinColumn()
    login!: Login;
}

const hash = (password: string): string => {
    crypto.pbkdf2(password, salt, 200000, 64, 'sha512', (err, derivedKey) => {
        if (err) throw err;
        return derivedKey.toString('hex');
    });
    return '';
}

export const comparePassword = (password: string, hashedPassword: string): boolean => {
    return hash(password).localeCompare(hashedPassword) == 0;
}