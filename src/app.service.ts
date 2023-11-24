import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sendMessage() {
    return { message: 'NestJS', success: true };
  }

  subscribe(subscribtion) {
    return { subscribtion };
  }
}
