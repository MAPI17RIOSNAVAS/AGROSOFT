import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity('ventas')
export class Venta {
    @PrimaryGeneratedColumn('uuid')
    id_venta: string;

    @Column('uuid')
    id_cosecha: string;

    @CreateDateColumn({name: 'fecha_venta'})
    fecha_venta: Date;

    @Column('float')
    cantidad_vendida: number;

    @Column('float')
    precio_unitario: number;

    @Column('float')
    ingreso_total: number;

    @Column('text')
    forma_pago: string;

    @Column('text')
    estado_pago: string;
}
