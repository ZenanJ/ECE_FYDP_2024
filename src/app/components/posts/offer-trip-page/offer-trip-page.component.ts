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
  trips = this.tripService.trips;
  tripState: string = 'take';
  handleButtonClick(action: string) {
  
  }
  ngOnInit(): void {}
}
