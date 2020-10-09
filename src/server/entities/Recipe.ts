import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Ingredient } from './Ingredient'; 

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToMany(type => Ingredient, ingredient => ingredient.id)
    ingredients!: Ingredient[];

    @Column()
    instructions!: string;
}