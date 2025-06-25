import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @Column()
  edad: number;

  @Column()
  sexo: string;

  @Column()
  localidad: string;

  @Column()
  numTel: string;

  @Column({ unique: true })
  correo: string;

  @Column()
  ocupacion: string;

  @Column()
  password: string;
}
