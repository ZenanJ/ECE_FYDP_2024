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
  trips = this.tripService.trips;
  tripState: string = 'take';
  handleButtonClick(action: string) {
  
  }
  ngOnInit(): void {}
}
