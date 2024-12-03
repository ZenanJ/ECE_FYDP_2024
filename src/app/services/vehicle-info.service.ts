import { Injectable } from '@angular/core';
import { VehicleInfo } from '../models/vehicle-info.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';  // Used to return a fallback observable on error

@Injectable({
  providedIn: 'root'
})
export class VehicleInfoService {

  private apiUrl = 'http://ec2-44-202-83-123.compute-1.amazonaws.com:8005/'
  constructor( private http: HttpClient ) { 
  }

  vehicleInfo1: VehicleInfo = {
    brand: 'lexus',
    color: 'black',
    type: 'SUV',
    plateNum: '1231234'
  }
  vehicleInfo2: VehicleInfo = {
    brand: 'acura',
    color: 'red',
    type: 'SUV',
    plateNum: '7654321'
  }
  vehicles: VehicleInfo[] = [this.vehicleInfo1, this.vehicleInfo2];

  deleteVehicle(VehicleId: string){
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
    return this.http.put<any>(
      `${this.apiUrl}/?vehicle=${VehicleId}`,
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
