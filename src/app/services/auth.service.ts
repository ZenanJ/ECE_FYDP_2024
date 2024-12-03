import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject, tap } from 'rxjs';
import { PersonalBasicInfo } from '../models/personal-basic-info.model';
import { Router } from '@angular/router'; // Import Router

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://ec2-44-202-83-123.compute-1.amazonaws.com:8005/auth'; // Replace with your API URL

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  // Observable string sources
  private loginCheckBeforeRouteCallSource = new Subject<any>();
  // Observable string streams
  loginCheckBeforeRouteCalled$ = this.loginCheckBeforeRouteCallSource.asObservable();

  private personalInfoSubject = new BehaviorSubject<PersonalBasicInfo>({
    personalID: 1,
    phoneNum: 1234567890,
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
  });
  personalInfo$ = this.personalInfoSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  register(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // Add any other headers if required
    });

    return this.http.post(`${this.apiUrl}/signup`, user, { headers: headers });
  }

  login(user: any): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // Add any other headers if required
    });

    let personalInfo: PersonalBasicInfo;
    return this.http.post(`${this.apiUrl}/login`, user, { headers: headers }).pipe(
      // Handle the response
      tap((response: any) => {
        const token = response.token;
        console.log(token)
        if (token) {
          // Store the token in localStorage (or sessionStorage)
          localStorage.setItem('jwtToken', token);
        }


        personalInfo = {
          personalID: response.id,
          phoneNum: response.phoneNum,
          firstName: response.firstName,
          lastName: response.lastName,
          email: response.email,
          // Add other properties as needed
        };
        const user_id = personalInfo.personalID
        if(user_id){
          localStorage.setItem('user_id', user_id.toString())
        }
        this.isAuthenticatedSubject.next(true);
        this.personalInfoSubject.next(personalInfo);
      })
    );

  }

  logout(): void {
    // Clear user data and update isAuthenticatedSubject
    // Add any other logic you need to clear user data here
    this.isAuthenticatedSubject.next(false);

    this.personalInfoSubject.next({
      personalID: 0,  // Use an appropriate default ID or set it to `null`
      phoneNum: 0,  // Default or empty value for phone_num
      firstName: '',
      lastName: '',
      email: '',
    });
  
    // Optionally, clear the JWT token if stored in localStorage or sessionStorage
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user_id')
    this.router.navigate(['/home']);
  }

  get isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  loginCheckBeforeRoute(route: String){
    this.loginCheckBeforeRouteCallSource.next(route);
  }
  
}