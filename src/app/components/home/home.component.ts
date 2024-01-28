// home.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: string = '';
  logoUrl = "src/assets/car-svgrepo-com.svg";
  _isAuthenticated: boolean = false;

  constructor(
    private httpRequestService: HttpRequestService,
    public router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  pageRoute(route: string) {
    this.authService.loginCheckBeforeRoute(route);
  }

 

}
