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
  // trip1: TripInfo = {
  //   tripID: "123",
  //   driver: this.driver1,
  //   passenger: [this.passenger1, this.passenger2],
  //   startTime: Date.now(),
  //   vehicle: this.vehicle1
  // }

  // trips: TripInfo[] = [this.trip1, this.trip1];

  //fake trips
  trips: TripInfo[] = [
    {
        tripID: '1',
        departure: 'New York',
        destination: 'Boston',
        departureTime: '9:00 AM',
        seatsAvailable: 3,
        price: 25,
        driverName: 'John Doe',
        driver: {
            personalID: 123,
            phone_num: 1231231234,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
        },
        passenger: [
            {
                personalID: 123,
                phone_num: 1231231234,
                firstName: 'Alice',
                lastName: 'Adams',
                email: 'alice.adams@example.com',
            }
        ],
        vehicle: {
            brand: 'Toyota',
            color: 'Red',
            type: 'Sedan',
            plateNum: 'NY1234',
            model: 'Camry',
            year: 2020,
        }
    },
    {
        tripID: '2',
        departure: 'San Francisco',
        destination: 'Los Angeles',
        departureTime: '2:00 PM',
        seatsAvailable: 4,
        price: 30,
        driverName: 'Jane Smith',
        driver: {
            personalID: 123,
            phone_num: 1231231234,
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
        },
        passenger: [
            {
                personalID: 123,
                phone_num: 1231231234,
                firstName: 'Bob',
                lastName: 'Brown',
                email: 'bob.brown@example.com',
            }
        ],
        vehicle: {
            brand: 'Honda',
            color: 'Blue',
            type: 'Coupe',
            plateNum: 'CA5678',
            model: 'Civic',
            year: 2019,
        }
    },
    {
        tripID: '3',
        departure: 'Chicago',
        destination: 'Seattle',
        departureTime: '11:00 AM',
        seatsAvailable: 2,
        price: 40,
        driverName: 'Alice Johnson',
        driver: {
            personalID: 123,
            phone_num: 1231231234,
            firstName: 'Alice',
            lastName: 'Johnson',
            email: 'alice.johnson@example.com',
        },
        passenger: [
            {
                personalID: 123,
                phone_num: 1231231234,
                firstName: 'Charlie',
                lastName: 'Clark',
                email: 'charlie.clark@example.com',
            }
        ],
        vehicle: {
            brand: 'Ford',
            color: 'Black',
            type: 'SUV',
            plateNum: 'IL9101',
            model: 'Explorer',
            year: 2021,
        }
    },
    {
        tripID: '4',
        departure: 'Miami',
        destination: 'Orlando',
        departureTime: '4:00 PM',
        seatsAvailable: 1,
        price: 20,
        driverName: 'Bob Brown',
        driver: {
            personalID: 123,
            phone_num: 1231231234,
            firstName: 'Bob',
            lastName: 'Brown',
            email: 'bob.brown@example.com',
        },
        passenger: [
            {
                personalID: 123,
                phone_num: 1231231234,
                firstName: 'David',
                lastName: 'Davis',
                email: 'david.davis@example.com',
            }
        ],
        vehicle: {
            brand: 'Chevrolet',
            color: 'White',
            type: 'Hatchback',
            plateNum: 'FL2345',
            model: 'Malibu',
            year: 2018,
        }
    }
    // Add more trips as needed
];


  getCarpoolTrips(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/carpool-trips`);

  }
}
