import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TripInfo } from '../models/trip-info.model';
import { VehicleInfo } from '../models/vehicle-info.model';
import { VehicleInfoService } from '../services/vehicle-info.service';
import { TripInfoService } from '../services/trip-info.service';
import { PersonalInfoService } from '../services/personal-info.service';
import { PersonalBasicInfo } from '../models/personal-basic-info.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  constructor(
    private primengConfig: PrimeNGConfig,
    private vehicleInfoService: VehicleInfoService,
    private tripService: TripInfoService,
    private personalInfoService: PersonalInfoService
    ) {}

  vehicles: VehicleInfo[] = this.vehicleInfoService.vehicles;
  trips: TripInfo[] = this.tripService.trips;
  personalInfo: PersonalBasicInfo = this.personalInfoService.personalInfo;
  

}
