import { Component, Input } from '@angular/core';
import { VehicleInfo } from '../../models/vehicle-info.model'; // Adjust the path as necessary

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent {
  @Input() vehicle!: VehicleInfo; // Use ! to assert that the vehicle will be provided
}
