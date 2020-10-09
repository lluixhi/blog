import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

import { Recipe } from './Recipe';

@Entity()
export class Ingredient {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    amount!: number

    @Column()
    unit!: string

    @Column()
    name!: string

    @ManyToMany(type => Recipe)
    @JoinTable()
    recipes!: Recipe[]
}