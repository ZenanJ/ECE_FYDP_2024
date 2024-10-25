import { Component, OnInit, ViewChild } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PersonalBasicInfo } from '../../models/personal-basic-info.model';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit{
    items: MenuItem[] = [];
    loginStatus: string = 'Login';
    loginDialogVisibility: boolean = false;
    _personalInfo?: PersonalBasicInfo;
    _isAuthenticated: boolean = false;
    @ViewChild(LoginComponent) _loginComponent!: LoginComponent;
    
    constructor(
      public router: Router,
      public activatedRoute: ActivatedRoute,
      private authService: AuthService
      ){}
    
    ngOnInit(){
      this.items = [
        {
          label: 'Home',
          routerLink: ['/home'],
          icon: 'pi pi-home'
        },
        {
          label: 'Current Trip',
          routerLink: ['/current-trip'],
          icon: 'pi pi-car'
        },
        {
          label: 'Posts',
          icon: 'pi pi-map',
          items: [
            {
              label: 'Request a Ride',
              routerLink: ['posts/request-trip'],
              icon: 'pi pi-money-bill'
            },
            {
              label: 'Offer a Ride',
              routerLink: ['posts/offer-trip'],
              icon: 'pi pi-flag'
            }
          ]
        },
        {
          label: 'My Profile',
          //routerLink: ['/profile'],
          command: () => this.onMenuItemClick('/profile'),
          icon: 'pi pi-user'
        }
      ]

      this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
        this._isAuthenticated = isAuthenticated;
      });
      this.authService.personalInfo$.subscribe((personalInfo) => {
        this._personalInfo = personalInfo;
        this.loginStatus = this._isAuthenticated ? (this._personalInfo?.firstName ?? "Login") : "Login";
      });
      //check auth before routing, call through auth service
      this.authService.loginCheckBeforeRouteCalled$.subscribe((routePath) => {
        this.onMenuItemClick(routePath);
      });
    }

    onClick(): void{
      window.location.href = "https://www.linkedin.com/in/zenan-eric-jiang/";
    }


    displayLoginDialog(){
      this._loginComponent.cleanInput();
      this.loginDialogVisibility = true;
    }

    onLoginSuccess() {
      // Close the login dialog
      this.loginDialogVisibility = false;
    }

    onMenuItemClick(route: string) {
      
      if(!this._isAuthenticated){
        this.displayLoginDialog();
      }
      else{
        this.router.navigate([route]);
      }
        
    }

    
}
