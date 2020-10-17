import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Ingredient } from './Ingredient';
import { Picture } from './Picture';

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToMany('Ingredient', 'id')
    ingredients!: Ingredient[];

    @OneToMany('Picture', 'id')
    picture!: Picture[];

    @Column()
    instructions!: string;
}
