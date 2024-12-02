import { Component } from '@angular/core';
import { TripInfoService } from '../../services/trip-info.service';
import { TripInfo } from '../../models/trip-info.model';

@Component({
  selector: 'app-current-trip-page',
  templateUrl: './current-trip-page.component.html',
  styleUrls: ['./current-trip-page.component.css']
})
export class CurrentTripPageComponent {
  constructor(
    private tripService: TripInfoService
  ){}
  trips: any[] = [];

  driverTrips: any[] = [];
  passengerTrips: any[] = [];

  ngOnInit(): void {
    // this.filterTrips();
    this.loadTrips(); 
  }

  tripState: string = 'finish';
  handleButtonClick(action: string) {
    if(action === this.tripState){
      this.loadTrips()
    }
  }
  filterTrips(): void {
    // this.driverTrips = this.trips.filter(trip => trip.role === 'driver');
    // this.passengerTrips = this.trips.filter(trip => trip.role === 'passenger');

    //fake
    this.driverTrips = this.trips;
    this.passengerTrips = this.trips;
  }
  loadTrips(): void {
    this.tripService.getCurrentTripsByUserId().subscribe(
      (response: any[]) => {
        this.trips = response.filter(_ => _.activate === true); // Assign the returned array to the trips variable
        console.log('Trips loaded:', this.trips); // Debug log
        // Filter and combine trips
        this.driverTrips = this.trips.filter(trip => trip.driverPost === true);
        this.passengerTrips = this.trips.filter(trip => trip.driverPost === false);
      },
      error => {
        console.error('Error loading trips:', error); // Handle error
      }
    );
  }
}
