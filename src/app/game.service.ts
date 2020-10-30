import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  private BASE_URL: string = 'http://localhost:1338';

  constructor(private http: HttpClient) { }

  public sendAttempt(attempt: number): Observable<object> {
    return this.http.post(`${this.BASE_URL}/game/attempt`, {
      attempt
    }, {
      responseType: 'json'
    });
  }

  public getHistoric(): Observable<object> {
    return this.http.get(`${this.BASE_URL}/game/historic`, {
      responseType: 'json'
    });
  }
}
