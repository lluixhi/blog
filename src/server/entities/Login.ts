import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Login {
    @PrimaryColumn()
    username!: string;

    @Column()
    token!: string;
}