import { Component } from '@angular/core';
import { TripInfoService } from '../../../services/trip-info.service';

@Component({
  selector: 'app-offer-trip-page',
  templateUrl: './offer-trip-page.component.html',
  styleUrls: ['./offer-trip-page.component.css']
})
export class OfferTripPageComponent {
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
    this.tripService.getActiveDriverTrips().subscribe(
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
