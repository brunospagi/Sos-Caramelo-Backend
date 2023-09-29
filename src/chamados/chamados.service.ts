import { Injectable } from '@nestjs/common';
import { CreateChamadoDto } from './dto/create-chamado.dto';
import { UpdateChamadoDto } from './dto/update-chamado.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChamadosService {
  constructor(private prisma: PrismaService){}
  create(createChamadoDto: CreateChamadoDto) {
  return this.prisma.chamados.create({data: createChamadoDto});
  }

  findAll() {
    return `This action returns all chamados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chamado`;
  }

  update(id: number, updateChamadoDto: UpdateChamadoDto) {
    return `This action updates a #${id} chamado`;
  }

  remove(id: number) {
    return `This action removes a #${id} chamado`;
  }
}
