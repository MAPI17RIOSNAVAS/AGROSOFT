import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venta } from './entities/venta.entity';
import { CreateVentaDto } from './dto/create-venta.dto';


@Injectable()
export class VentaService {
  constructor(
    @InjectRepository(Venta)
    private readonly ventaRepository: Repository<Venta>,
  ) {}

  async create(createVentaDto: CreateVentaDto){
    const total = createVentaDto.cantidad_vendida * createVentaDto.precio_unitario;
    const nuevaVenta = this.ventaRepository.create({
      ...createVentaDto,
      ingreso_total: total
    });

    return await this.ventaRepository.save(nuevaVenta);

  }

  async findAll() {
    return await this.ventaRepository.find();
  }
}
