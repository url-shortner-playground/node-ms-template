import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';
import { LoggerConfig } from './logger.config';
import { ConfigModule } from '@nestjs/config';
import {
  baseConfiguration,
  baseConfigurationSchema,
} from './config/configuration.base';

@Module({
  imports: [
    LoggerModule.forRoot(LoggerConfig),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [baseConfiguration],
      validationSchema: baseConfigurationSchema,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
