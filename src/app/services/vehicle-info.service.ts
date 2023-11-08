import { Injectable } from '@angular/core';
import { VehicleInfo } from '../models/vehicle-info.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleInfoService {

  constructor() { 
  }

  vehicleInfo1: VehicleInfo = {
    brand: 'lexus',
    color: 'black',
    type: 'SUV',
    plateNum: '1231234'
  }
  vehicleInfo2: VehicleInfo = {
    brand: 'acura',
    color: 'red',
    type: 'SUV',
    plateNum: '7654321'
  }
  vehicles: VehicleInfo[] = [this.vehicleInfo1, this.vehicleInfo2];
}
