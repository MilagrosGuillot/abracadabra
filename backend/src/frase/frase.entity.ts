import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Frase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  texto: string;
}
