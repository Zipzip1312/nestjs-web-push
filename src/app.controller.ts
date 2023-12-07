import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getRequestProxy(@Query() query) {
    const response = await this.appService.GET(query);
    return { response };
  }

  @Post()
  async postRequestProxy(@Body() body) {
    const response = await this.appService.POST(body);
    return { response };
  }
}
