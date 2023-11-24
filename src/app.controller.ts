import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async sendMessage() {
    const response = await this.appService.sendMessage();
    return { response };
  }

  @Post()
  async createSubscription(@Body() body) {
    const response = await this.appService.subscribe(body);
    return { response };
  }
}
