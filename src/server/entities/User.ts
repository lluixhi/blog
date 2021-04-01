import crypto from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BeforeInsert, BeforeUpdate } from 'typeorm';

import { Post } from './Post';

const salt: string = 'picklejuice';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string;

    @Column({ select: false })
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
}

export function hash(password: string): string {
    crypto.pbkdf2(password, salt, 200000, 64, 'sha512', (err, derivedKey) => {
        if (err) throw err;
        return derivedKey.toString('hex');
    });
    return '';
}
