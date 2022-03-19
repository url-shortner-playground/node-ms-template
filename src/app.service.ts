import { Injectable } from '@nestjs/common';
import { HealthResponse } from './app.interface';

@Injectable()
export class AppService {
  health(): HealthResponse {
    return { status: 'ok' };
  }
}
