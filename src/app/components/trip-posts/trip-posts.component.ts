import { Component, OnInit } from '@angular/core';
import { TripInfoService } from '../../services/trip-info.service';
import { TripInfo } from '../../models/trip-info.model';

@Component({
  selector: 'app-trip-posts',
  templateUrl: './trip-posts.component.html',
  styleUrls: ['./trip-posts.component.css']
})
export class TripPostsComponent implements OnInit{

  carpoolTrips: any[] = [];

  constructor(private tripInfoService: TripInfoService) {}

  ngOnInit(): void {
    this.tripInfoService.getCarpoolTrips().subscribe((trips) => {
      this.carpoolTrips = trips;
    });
  }



  applyForTrip(trip: TripInfo){

  }

}
