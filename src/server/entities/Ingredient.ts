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

    @OneToMany('Ingredient', 'id')
    substitutions!: Ingredient[];

    @ManyToMany('Recipe')
    @JoinTable()
    recipes!: Recipe[];
}
