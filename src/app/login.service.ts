import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private BASE_URL: string = 'http://localhost:1338';

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<object> {
    return this.http.post(`${this.BASE_URL}/login`, {
      email,
      password
    }, {
      responseType: 'json'
    });
  }
}
