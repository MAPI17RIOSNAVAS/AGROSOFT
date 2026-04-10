
    import { IsIn } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
    
    @Entity()
    export class Cultivo {
        @PrimaryGeneratedColumn('uuid')
        id:string
    
        @Column('text')
        name:string
    
        @Column('date')
        fechai:string
    
        @Column('numeric')
        tamaño: number;
    
        @Column('text')
        @IsIn(['bueno', 'regular', 'dañado'])
        estado:string
    
    }
    

