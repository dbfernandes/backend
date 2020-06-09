import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Disciplina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @Column()
  nome: string;  

  @Column()
  cargaHoraria: number;    

  @Column()
  creditos: string;  
  
  @Column()
  objetivos: string;    

  @Column()
  ementa: string;      

  @Column()
  referencias: string;      

  @CreateDateColumn({ name: "createdAt", type: "datetime" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt", type: "datetime" })
  updatedAt: Date;
}
