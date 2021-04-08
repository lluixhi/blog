import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Picture {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    path!: string;
}