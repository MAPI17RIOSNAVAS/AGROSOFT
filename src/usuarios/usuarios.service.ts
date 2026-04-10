import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly UsuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const usuario = this.UsuarioRepository.create(createUsuarioDto);
      await this.UsuarioRepository.save(usuario);
      return usuario;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('No se registro');
    }
  }

  async findAll() {
    return await this.UsuarioRepository.find();
  }

  async findOne(id: string) {
    const Usuario = await this.UsuarioRepository.findOneBy({ id });
    if (!Usuario) {
      throw new NotFoundException('Usuario con id ${id} no existe');
    }
    return Usuario;
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const Usuario = await this.UsuarioRepository.preload({
      id,
      ...updateUsuarioDto,
    });

    if (!Usuario) {
      throw new NotFoundException('Usuario con id ${id} no existe');
    }

    try {
      await this.UsuarioRepository.save(Usuario);
      return Usuario;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('No se pudo actualizar');
    }
  }

  async remove(id: string) {
    const Usuario = await this.findOne(id);
    await this.UsuarioRepository.remove(Usuario);
    return { mensaje: 'Usuario eliminado correctamente' };
  }
}