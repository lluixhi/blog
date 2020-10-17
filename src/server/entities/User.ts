import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Post } from './Post';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string;

    @Column()
    hashedPassword!: string;

    @Column()
    email!: string;

    @OneToMany('Post', 'user')
    posts!: Post[];
}
