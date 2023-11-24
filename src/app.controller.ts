import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async sendMessage(@Query() query) {
    const response = await this.appService.sendMessage(query?.message || 'no message provided');
    return { response };
  }

  @Post()
  async createSubscription(@Body() body) {
    const response = await this.appService.subscribe(body);
    return { response };
  }
}
