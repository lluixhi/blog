import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';

import { User } from './User';
import { Picture } from './Picture';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, user => user.posts)
    user!: User;

    @OneToOne(type => Picture)
    picture!: Picture;

    @Column()
    text!: string;
}