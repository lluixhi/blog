import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Ingredient } from './Ingredient';
import { Picture } from './Picture';

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToMany(type => Ingredient, ingredient => ingredient.id)
    ingredients!: Ingredient[];

    @OneToMany(type => Picture, picture => picture.id)
    picture!: Picture[];

    @Column()
    instructions!: string;
}