import { Controller, Get } from '@nestjs/common';
import { HealthResponse } from './app.interface';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  getHealth(): HealthResponse {
    return this.appService.health();
  }
}
