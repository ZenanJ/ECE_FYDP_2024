import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:10001/auth'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: any): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // Add any other headers if required
    });

    return this.http.post(`${this.apiUrl}/login`, user, { headers: headers });
  }

  // Add other authentication-related methods here
}