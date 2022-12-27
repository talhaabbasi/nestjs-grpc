import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HeroByIDReqDto } from './dto/hero.by.id.req.dto';
import { Hero } from './model/hero.model';

@Controller('heros')
export class HerosController {
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(
    data: HeroByIDReqDto,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
