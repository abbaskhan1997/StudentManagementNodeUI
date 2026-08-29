import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<{ token: string }> {
  return this.http.post<{ token: string }>(
    'http://localhost:3000/api/auth/login',
    {
      email,
      password
    }
  );
}

}