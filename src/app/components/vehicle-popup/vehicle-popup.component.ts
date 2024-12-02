import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-vehicle-popup',
  templateUrl: './vehicle-popup.component.html',
  styleUrls: ['./vehicle-popup.component.css']
})
export class VehiclePopupComponent {

  vehicleForm = new FormGroup ({
    brand: new FormControl(''),        // No validators
    color: new FormControl(''),        // No validators
    type: new FormControl(''),         // No validators
    plateNum: new FormControl(''),     // No validators
    model: new FormControl(''),        // Optional
    year: new FormControl('')        // Optional
  })

  onSubmit() {
    if (this.vehicleForm.valid) {
      // Emit form data to parent component or call service to save the vehicle
      const vehicleData = this.vehicleForm.value;
      console.log(vehicleData); // For testing, you can log the data
      // Call the service to add the vehicle
    }
  }
}
