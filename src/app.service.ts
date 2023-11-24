import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sendMessage() {
    return { message: 'NestJS CORS', success: true };
  }

  subscribe(subscribtion) {
    return { subscribtion };
  }
}
