import { Injectable } from '@angular/core';
import { PersonalBasicInfo } from '../models/personal-basic-info.model';
import { TripInfo } from '../models/trip-info.model';
import { VehicleInfo } from '../models/vehicle-info.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';  // Used to return a fallback observable on error

@Injectable({
  providedIn: 'root'
})
export class TripInfoService {

  private apiUrl = 'http://localhost:8005/carpool-trips';

  constructor( private http: HttpClient ) { }

  getCarpoolTrips(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);

  }

  getActiveDriverTrips(): Observable<any[]> {
    const jwtToken = localStorage.getItem('jwtToken'); // Retrieve token from storage
    
    if (!jwtToken) {
        console.error('JWT Token is missing!');
        return of([{ success: false, message: 'Unauthorized request. Token is missing.' }]);
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwtToken}`
  });

  // Send a GET request to the backend API
  return this.http.get<any[]>(`${this.apiUrl}/active-driver-posts`, { headers: headers })
    .pipe(
      tap((response: any) => {
        console.log(`response received: ${response}`);
      }),
      catchError(error => {
        console.error('Error occurred:', error); // Log the error to the console
        
        // Return an empty array to maintain the return type
        return of([]);
      })
    );

  }

  getActivePassengerTrips(): Observable<any[]> {
    const jwtToken = localStorage.getItem('jwtToken'); // Retrieve token from storage
    
    if (!jwtToken) {
        console.error('JWT Token is missing!');
        return of([{ success: false, message: 'Unauthorized request. Token is missing.' }]);
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwtToken}`
  });

  // Send a GET request to the backend API
  return this.http.get<any[]>(`${this.apiUrl}/active-passenger-posts`, { headers: headers })
    .pipe(
      tap((response: any) => {
        console.log(`response received: ${response}`);
      }),
      catchError(error => {
        console.error('Error occurred:', error); // Log the error to the console
        
        // Return an empty array to maintain the return type
        return of([]);
      })
    );

  }


  addPosting(TripInfo: TripInfo): Observable<any> {
    console.log('calling add post in trip-info');
    const jwtToken = localStorage.getItem('jwtToken'); // Retrieve token from storage
    const userId = localStorage.getItem('user_id')
    if (!jwtToken) {
        console.error('JWT Token is missing!');
        return of([{ success: false, message: 'Unauthorized request. Token is missing.' }]);
    }
    if (!userId) {
      console.error('user id is missing!');
      return of([{ success: false, message: 'Unauthorized request. Cannot find user id.' }]);
    }

    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
    });

    return this.http.post<any>(`${this.apiUrl}/add-post?userId=${userId}`, TripInfo, { headers: headers, withCredentials: true })
      .pipe(
        tap((response: any) => {
            console.log(`response recieved: ${response}`)
        }),
        catchError(error => {
          console.error('Error occurred:', error);  // Log the error to the console
          
          // Return an observable with error details to show to the user
          return of({ success: false, message: error.message || 'Something went wrong' });
        })
      );
  }
  
  getCurrentTripsByUserId(): Observable<any[]> {
    const jwtToken = localStorage.getItem('jwtToken'); // Retrieve token from storage
    const userId = localStorage.getItem('user_id')
    if (!jwtToken) {
        console.error('JWT Token is missing!');
        return of([{ success: false, message: 'Unauthorized request. Token is missing.' }]);
    }
    if (!userId) {
      console.error('user id is missing!');
      return of([{ success: false, message: 'Unauthorized request. Cannot find user id.' }]);
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwtToken}`
    });

  // Send a GET request to the backend API
    return this.http.get<any[]>(`${this.apiUrl}/get-user-trip-history?userId=${userId}`, { headers: headers })
    .pipe(
      tap((response: any) => {
        console.log(`Response received: ${JSON.stringify(response)}`);
      }),
      catchError(error => {
        console.error('Error occurred:', error); // Log the error to the console

        // Return an empty array to maintain the return type
        return of([]);
      })
    );
  }

  finishTrip(tripId: number, isActivate: boolean): Observable<any> {
    const jwtToken = localStorage.getItem('jwtToken');
    const userId = localStorage.getItem('user_id');
  
    if (!jwtToken) {
      console.error('JWT Token is missing!');
      return of({ success: false, message: 'Unauthorized request. Token is missing.' });
    }
  
    if (!userId) {
      console.error('User ID is missing!');
      return of({ success: false, message: 'Unauthorized request. User ID is missing.' });
    }
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwtToken}`
    });
  
    const payload = { isActivate };
  
    return this.http.put<any>(
      `${this.apiUrl}/expire?tripId=${tripId}`,
      payload,
      { headers, withCredentials: true }
    ).pipe(
      tap((response: any) => {
        if (response.success) {
          console.log('Trip updated successfully:', response.message);
        } else {
          console.warn('Failed to update trip:', response.message);
        }
      }),
      catchError(error => {
        console.error('Error occurred:', error);
        return of({ success: false, message: 'Error occurred while updating trip.' });
      })
    );
  }
  
  
}
