import { Component } from '@angular/core';
import { TripInfoService } from '../../../services/trip-info.service';

@Component({
  selector: 'app-request-trip-page',
  templateUrl: './request-trip-page.component.html',
  styleUrls: ['./request-trip-page.component.css']
})
export class RequestTripPageComponent {
  constructor(
    private tripService: TripInfoService
  ){}
  trips: any[] = [];
  tripState: string = 'take';
  handleButtonClick(action: string) {
  
  }
  ngOnInit(): void {
    this.loadTrips(); 
  }
  loadTrips(): void {
    this.tripService.getActivePassengerTrips().subscribe(
      (response: any[]) => {
        this.trips = response; // Assign the returned array to the trips variable
        console.log('Trips loaded:', this.trips); // Debug log
      },
      error => {
        console.error('Error loading trips:', error); // Handle error
      }
    );
  }
}
