import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateCultivoDto } from './dto/create-cultivo.dto';
import { UpdateCultivoDto } from './dto/update-cultivo.dto';
import { Repository } from 'typeorm';
import { Cultivo } from './entities/cultivo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CultivosService {
  constructor(
    @InjectRepository(Cultivo)
    private readonly cultivoRepository: Repository<Cultivo>,
  ) {}

  async create(createCultivoDto: CreateCultivoDto) {
    try {
      const cultivo = this.cultivoRepository.create(createCultivoDto);
      await this.cultivoRepository.save(cultivo);
      return cultivo;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('No se registro');
    }
  }

  async findAll() {
    return await this.cultivoRepository.find();
  }

  async findOne(id: string) {
    const cultivo = await this.cultivoRepository.findOneBy({ id });
    if (!cultivo) {
      throw new NotFoundException('Cultivo con id ${id} no existe');
    }
    return cultivo;
  }

  async update(id: string, updateCultivoDto: UpdateCultivoDto) {
    const cultivo = await this.cultivoRepository.preload({
      id,
      ...updateCultivoDto,
    });

    if (!cultivo) {
      throw new NotFoundException('Cultivo con id ${id} no existe');
    }

    try {
      await this.cultivoRepository.save(cultivo);
      return cultivo;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('No se pudo actualizar');
    }
  }

  async remove(id: string) {
    const cultivo = await this.findOne(id);
    await this.cultivoRepository.remove(cultivo);
    return { mensaje: 'Cultivo eliminado correctamente' };
  }
}