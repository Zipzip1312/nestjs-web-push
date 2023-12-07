import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {

  private apiUrl = 'https://web-push-server-silk.vercel.app/api';
  // private apiUrl = 'http://localhost:3001/api';

  constructor(private readonly httpService: HttpService) { }

  async GET(query) {
    const url = `${this.apiUrl}?${query}`;

    const { data } = await firstValueFrom(
      this.httpService.get(url).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!';
        }),
      ),
    );

    return data;
  }

  async POST(body) {
    const { data } = await firstValueFrom(
      this.httpService.post(this.apiUrl, body).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!';
        }),
      ),
    );

    return data;
  }
}
