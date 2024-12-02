import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { TripInfoService } from '../../services/trip-info.service';

@Component({
  selector: 'app-carpool-trip-card',
  templateUrl: './carpool-trip-card.component.html',
  styleUrls: ['./carpool-trip-card.component.css']
})
export class CarpoolTripCardComponent {
  constructor(
    private tripService: TripInfoService
  ){}
  @Input() tripID: string= '';
  @Input() departure: string= '';
  @Input() destination: string= '';
  @Input() departureTime: string= '';
  @Input() seatsAvailable: number= 0;
  @Input() price: number= 0;
  @Input() driverName: string= '';
  @Input() phoneNum: number= 0;
  @Input() buttonState: string = 'take'; // New input for button state
  @Output() buttonClicked = new EventEmitter<string>(); // Event emitter for button click

  ngOnInit(): void {
    console.log(`driverName: ${this.driverName}`)
  }
  onButtonClick() {
    let reqeust: string = '';
    if (this.buttonState === 'finish') {
      // this.buttonClicked.emit('finish');
      const tripIdNumber = parseInt(this.tripID, 10); 
      this.tripService.finishTrip(tripIdNumber, false).subscribe(
        (response) => {
          // Handle the successful response
          console.log('Trip successfully updated:', response);
          // Optionally update UI or state here
          this.buttonClicked.emit('finish');
        },
        (error) => {
          // Handle the error response
          console.error('Error loading trips:', error);
        }
      );
      
    } else if (this.buttonState === 'take') {
      // this.buttonClicked.emit('take');
    }
  }
}
