// home.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/services/http-request.service'; // Check the correct path

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: string = '';

  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {
    this.httpRequestService.getData().subscribe({
      next: data => {
        console.log('API Response:', data);
        // Check the structure of the data object
        console.log('Data Structure:', typeof data, data);
        this.message = JSON.stringify( data, null, 2);
      },
      error: error => {
        console.error('Error fetching data:', error);
      },
      // Optionally, include complete callback if needed
      // complete: () => {
      //   console.log('Data fetching completed');
      // }
    });
  }
}
