import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { PersonalBasicInfo } from '../models/personal-basic-info.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://3.80.129.189:10001/auth'; // Replace with your API URL

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  // Observable string sources
  private loginCheckBeforeRouteCallSource = new Subject<any>();
  // Observable string streams
  loginCheckBeforeRouteCalled$ = this.loginCheckBeforeRouteCallSource.asObservable();

  private personalInfoSubject = new BehaviorSubject<PersonalBasicInfo>({
    personalID: 1,
    phone_num: 1234567890,
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
  });
  personalInfo$ = this.personalInfoSubject.asObservable();

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // Add any other headers if required
    });

    return this.http.post(`${this.apiUrl}/register`, user, { headers: headers });
  }

  login(user: any): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // Add any other headers if required
    });
    
    return this.http.post(`${this.apiUrl}/login`, user, { headers: headers }).pipe(
      // Handle the response
      tap((response: any) => {
        const personalInfo: PersonalBasicInfo = {
          personalID: response._id,
          phone_num: response.phone_num,
          firstName: response.first_name,
          lastName: response.last_name,
          email: response.email,
          // Add other properties as needed
        };
        this.isAuthenticatedSubject.next(true);
        this.personalInfoSubject.next(personalInfo);
      })
    );
  }

  logout(): void {
    // Clear user data and update isAuthenticatedSubject
    // Add any other logic you need to clear user data here
    this.isAuthenticatedSubject.next(false);
  }

  get isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  loginCheckBeforeRoute(route: String){
    this.loginCheckBeforeRouteCallSource.next(route);
  }
  
}