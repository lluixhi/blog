import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

import { Picture } from './Picture';
import { User } from './User';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne('User', 'posts')
    user!: User;

    @OneToMany('Picture', 'pictures')
    picture!: Picture[];

    @Column()
    text!: string;
}
