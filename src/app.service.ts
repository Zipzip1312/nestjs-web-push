import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

interface IResponse {
  message: string
}

@Injectable()
export class AppService {

  private apiUrl = 'https://web-push-server-silk.vercel.app/api';
  // private apiUrl = 'http://localhost:3001/api';

  constructor(private readonly httpService: HttpService) { }

  async sendMessage() {
    const { data } = await firstValueFrom(
      this.httpService.get<IResponse>(this.apiUrl).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!';
        }),
      ),
    );

    return data?.message || 'no message have been received';
  }

  async subscribe(subscription) {
    const { data } = await firstValueFrom(
      this.httpService.post(this.apiUrl, subscription).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!';
        }),
      ),
    );

    return data;
  }
}
