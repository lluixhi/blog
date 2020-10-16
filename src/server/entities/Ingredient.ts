import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';

import { Recipe } from './Recipe';

@Entity()
export class Ingredient {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    amount!: number;

    @Column()
    unit!: string;

    @Column()
    name!: string;

    @OneToMany(type => Ingredient, ingredient => ingredient.id)
    substitutions!: Ingredient[];

    @ManyToMany(type => Recipe)
    @JoinTable()
    recipes!: Recipe[];
}