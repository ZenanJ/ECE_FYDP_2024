// http-request.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  private apiUrl = 'http://ec2-44-202-83-123.compute-1.amazonaws.com:8005/tut/books';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    console.log('ready to call');
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error fetching data:', error);
    // Handle the error as needed, e.g., return a default value
    return throwError('Failed to fetch data');
  }
}