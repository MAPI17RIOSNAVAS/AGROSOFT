import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column('text')
    name:string

    @Column('text')
    apellido:string

    @Column('text',{unique:true})
    correo:string

    @Column({ type: 'varchar', length: 20})
    tel: string;

    @Column('text')
    password:string

}
