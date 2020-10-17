import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne } from 'typeorm';

import { Picture } from './Picture';
import { User } from './User';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne('User', 'posts')
    user!: User;

    @OneToOne('Picture')
    picture!: Picture;

    @Column()
    text!: string;
}
