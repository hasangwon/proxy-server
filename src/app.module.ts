import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ProxyController } from './proxy/proxy.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ProxyController],
  providers: [AppService],
})
export class AppModule {}
