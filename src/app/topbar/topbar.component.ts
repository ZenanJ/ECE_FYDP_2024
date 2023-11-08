import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit{
    items: MenuItem[] = [];
    loginStatus: string = 'Eric';
    loginDialogVisibility: boolean = false;

    constructor(
      public router: Router,
      public activatedRoute: ActivatedRoute,
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
          icon: 'pi pi-car'
        },
        {
          label: 'Post',
          icon: 'pi pi-map',
          items: [
            {
              label: 'Want',
              icon: 'pi pi-money-bill'
            },
            {
              label: 'Need',
              icon: 'pi pi-flag'
            }
          ]
        },
        {
          label: 'My Profile',
          routerLink: ['/profile'],
          icon: 'pi pi-user'
        }
      ]
    }

    onClick(): void{
      window.location.href = "https://www.linkedin.com/in/zenan-eric-jiang/";
    }


    displayLoginDialog(){
      this.loginDialogVisibility = true;
    }
}
