import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinTable } from 'typeorm';

import { User } from './User';
import { Picture } from './Picture';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(type => Picture)
    picture!: Picture;

    @Column()
    text!: string;
}
