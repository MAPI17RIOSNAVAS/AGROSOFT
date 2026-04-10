import { Module } from '@nestjs/common';
import { CultivosService } from './cultivos.service';
import { CultivosController } from './cultivos.controller';
import { Cultivo } from './entities/cultivo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CultivosController],
  providers: [CultivosService],
  imports: [
      TypeOrmModule.forFeature([Cultivo])
    ]
})
export class CultivosModule {}
