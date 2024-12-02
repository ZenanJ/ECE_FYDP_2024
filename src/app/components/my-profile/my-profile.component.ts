import { Component, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TripInfo } from '../../models/trip-info.model';
import { VehicleInfo } from '../../models/vehicle-info.model';
import { VehicleInfoService } from '../../services/vehicle-info.service';
import { TripInfoService } from '../../services/trip-info.service';
import { PersonalInfoService } from '../../services/personal-info.service';
import { PersonalBasicInfo } from '../../models/personal-basic-info.model';
import { VehiclePopupComponent } from '../vehicle-popup/vehicle-popup.component'; // Import your component


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.personalInfoService.personalInfo$.subscribe((personalInfo) => {
      this.personalInfo = personalInfo;
    });
    this.loadTrips();
  }

  constructor(
    private primengConfig: PrimeNGConfig,
    private vehicleInfoService: VehicleInfoService,
    private tripService: TripInfoService,
    private personalInfoService: PersonalInfoService
    ) {}

  vehicles: VehicleInfo[] = this.vehicleInfoService.vehicles;
  trips: any[] = [];
  tripState: string = 'disabled';
  loginDialogVisibility: boolean = false;
  @ViewChild(VehiclePopupComponent) _VehiclePopupComponent!: VehiclePopupComponent;
  handleButtonClick(action: string) {
  
  }
  personalInfo?: PersonalBasicInfo;
  
  vehiclePopUp(){
    this.loginDialogVisibility = true;

  }
  loadTrips(): void {
    this.tripService.getCurrentTripsByUserId().subscribe(
      (response: any[]) => {
        this.trips = response; // Assign the returned array to the trips variable
        console.log('Trips loaded:', this.trips); // Debug log
        // Filter and combine trips
      },
      error => {
        console.error('Error loading trips:', error); // Handle error
      }
    );
  }
  
}
