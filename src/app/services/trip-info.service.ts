import { Injectable } from '@angular/core';
import { PersonalBasicInfo } from '../models/personal-basic-info.model';
import { TripInfo } from '../models/trip-info.model';
import { VehicleInfo } from '../models/vehicle-info.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripInfoService {

  private apiUrl = 'http://localhost:10001/auth';

  constructor( private http: HttpClient ) { }
// temp fake information
  vehicle1: VehicleInfo = {
    brand: "Lexus",
    color: "black",
    type: "SUV",
    plateNum: "1231231"
  }
  driver1: PersonalBasicInfo = {
    personalID: 123,
    phone_num: 1231231234,
    firstName: 'dri',
    lastName: '1',
    email: 'z242',
    vehicle: this.vehicle1
  }

  passenger1: PersonalBasicInfo = {
    personalID: 123,
    phone_num: 1231231234,
    firstName: 'pas',
    lastName: '1',
    email: 'z242'
  }
  passenger2: PersonalBasicInfo = {
    personalID: 123,
    phone_num: 1231231234,
    firstName: 'pas',
    lastName: '1',
    email: 'z242'
  }
  trip1: TripInfo = {
    tripID: "123",
    driver: this.driver1,
    passenger: [this.passenger1, this.passenger2],
    startTime: Date.now(),
    vehicle: this.vehicle1
  }

  trips: TripInfo[] = [this.trip1, this.trip1];

  getCarpoolTrips(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/carpool-trips`);

  }
}
