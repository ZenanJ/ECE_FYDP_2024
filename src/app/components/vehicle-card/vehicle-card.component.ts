import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { VehicleInfo } from '../../models/vehicle-info.model'; // Adjust the path as necessary
import { VehicleInfoService } from 'src/app/services/vehicle-info.service';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent {
  @Input() vehicle!: VehicleInfo; // Use ! to assert that the vehicle will be provided
  // brand: string;
  // color: string;
  // type: string;
  // plateNum: string;
  // model?: string;
  // year?: number;
  @Output() buttonClicked = new EventEmitter<string>(); // Event emitter for button click
  constructor(
    private vehicleInfoService: VehicleInfoService
  ){}
  onButtonClick(){
    this.vehicleInfoService.deleteVehicle(this.vehicle.plateNum).subscribe(
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
  }
}
