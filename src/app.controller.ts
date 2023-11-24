import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  sendMessage() {
    return this.appService.sendMessage();
  }

  @Post()
  createSubscription(@Body() body) {
    console.log(body);
    return { message: body?.message || 'no message', success: Boolean(body?.message) };
  }
}
