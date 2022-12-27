import { Module } from '@nestjs/common';
import { HerosController } from './heros.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hero',
          protoPath: join(__dirname, '../proto/hero.proto'),
        },
      },
    ]),
  ],
  controllers: [HerosController],
})
export class HerosModule {}
