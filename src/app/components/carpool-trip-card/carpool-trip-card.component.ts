import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-carpool-trip-card',
  templateUrl: './carpool-trip-card.component.html',
  styleUrls: ['./carpool-trip-card.component.css']
})
export class CarpoolTripCardComponent {
  @Input() tripID: string= '';
  @Input() departure: string= '';
  @Input() destination: string= '';
  @Input() departureTime: string= '';
  @Input() seatsAvailable: number= 0;
  @Input() price: number= 0;
  @Input() driverName: string= '';
  @Input() buttonState: string = 'take'; // New input for button state
  @Output() buttonClicked = new EventEmitter<string>(); // Event emitter for button click

  onButtonClick() {
    // if (this.buttonState === 'finish') {
    //   this.buttonClicked.emit('finish');
    // } else if (this.buttonState === 'take') {
    //   this.buttonClicked.emit('take');
    // }
  }
}
