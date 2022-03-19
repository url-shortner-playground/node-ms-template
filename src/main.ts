import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  const env = configService.get('NODE_ENV');
  const logger = app.get(Logger);

  logger.log(`Starting the application in "${env}" mode`);
  app.useLogger(logger);
  await app.listen(port);
}

bootstrap();
