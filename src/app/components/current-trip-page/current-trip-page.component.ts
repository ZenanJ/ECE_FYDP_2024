import { Component } from '@angular/core';
import { TripInfoService } from '../../services/trip-info.service';

@Component({
  selector: 'app-current-trip-page',
  templateUrl: './current-trip-page.component.html',
  styleUrls: ['./current-trip-page.component.css']
})
export class CurrentTripPageComponent {
  // fake info 
  constructor(
    private tripService: TripInfoService
  ){}
  trips = this.tripService.trips;

  driverTrips: any[] = [];
  passengerTrips: any[] = [];

  ngOnInit(): void {
    this.filterTrips();
  }

  tripState: string = 'finish';
  handleButtonClick(action: string) {
  
  }
  filterTrips(): void {
    // this.driverTrips = this.trips.filter(trip => trip.role === 'driver');
    // this.passengerTrips = this.trips.filter(trip => trip.role === 'passenger');

    //fake
    this.driverTrips = this.trips;
    this.passengerTrips = this.trips;
  }
}
