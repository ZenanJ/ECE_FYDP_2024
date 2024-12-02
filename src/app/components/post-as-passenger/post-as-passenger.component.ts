import { Component } from '@angular/core';
import { TripInfo } from 'src/app/models/trip-info.model';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { CookieService } from 'ngx-cookie-service';
import { TripInfoService } from 'src/app/services/trip-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-as-passenger',
  templateUrl: './post-as-passenger.component.html',
  styleUrls: ['./post-as-passenger.component.css']
})
export class PostAsPassengerComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private tripInfoService: TripInfoService
  ){}
  ngOnInit(): void {
    // Subscribe to personalInfo$
    this.authService.personalInfo$.subscribe((info) => {
      this.tripInfo.driver = info;
    });
  }
  tripInfo : TripInfo = {
    tripID: '',                  // Empty string for unique identifier
    departure: '',               // Empty string for departure location
    destination: '',             // Empty string for destination location
    departureTime: '',           // Empty string for departure time
    seatsAvailable: 0,           // Default value for number
    price: 0,                    // Default value for number
    driverName: '',              // Empty string for driver's name
    driver: {
      personalID: 0,             // Default value for ID
      phoneNum: 0,           // Null for phone number
      firstName: '',             // Empty string for first name
      lastName: '',              // Empty string for last name
      email: '',                 // Empty string for email
    },
    vehicle: {
      brand: '',                 // Empty string for vehicle brand
      color: '',                 // Empty string for vehicle color
      type: '',                  // Empty string for vehicle type
      plateNum: '',              // Empty string for plate number
      model: '',               // Null for optional model
      year: 0,                // Null for optional year
    },
    isDriverPost: false,
    isActivate: true
  };


  sendPost(){
    this.tripInfoService.addPosting(this.tripInfo).subscribe(
      response => {
        if (response.success) {
          // Handle success, e.g., show success message
          alert('Trip added successfully!');

          // After showing the alert, navigate to /home
          this.router.navigate(['/home']);
        } else {
          // Handle failure, e.g., show error message
          alert(`Failed to add trip: ${response.message}`);
        }
      },
      error => {
        // If there's a network error or other issues
        alert('An unexpected error occurred. Please try again later.');
        console.error(error);
      }
    );
  }
}
