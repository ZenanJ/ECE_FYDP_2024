import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { LoginInfo } from '../models/login-info.model';
import { SignUpInfo } from '../models/sign-up-info.model';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  authInfo: LoginInfo = {};
  phoneNum: string = '';
  signUp: boolean = false;
  userInfo: any = {};


  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ){

  }
  loginSubmit(){
    this.authInfo.phone_num = convertStringToNumber(this.phoneNum);
    if (!this.authInfo.phone_num || !this.authInfo.password) {
      this.showSuccessMessage();
      return;
    }
    this.authService.login(this.authInfo).subscribe({
        next: (response) => {
          console.log("Login successful:", response);
          // Handle the successful response
        },
        error: (error) => {
          console.error("Login error:", error);
          // Handle the error
        },
        complete: () => {
          // Handle the completion if needed
        }
      });
  }
  signUpSubmit(){
    this.authInfo.phone_num = convertStringToNumber(this.phoneNum);
    if (!this.authInfo.phone_num || !this.authInfo.password || !this.authInfo.email) {
      this.showSuccessMessage();
      return;
    }
    this.authService.login(this.authInfo).subscribe({
        next: (response) => {
          console.log("Login successful:", response);
          // Handle the successful response
        },
        error: (error) => {
          console.error("Login error:", error);
          // Handle the error
        },
        complete: () => {
          // Handle the completion if needed
        }
      });
  }

  ngOnInit(): void {
  }



  toSignUp(){
    this.authInfo = {};
    this.signUp = true;
  }
  toLogin(){
    this.authInfo = {};
    this.signUp = false;
  }

  showSuccessMessage() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Please fill in all fields',
    });
  }

}

function convertStringToNumber(inputString: string) {
  // Remove all non-numeric characters (except the '+' sign, if present)
  const numericString = inputString.replace(/[^0-9]/g, '');
  
  // Parse the numeric string as an integer
  const numericValue = parseInt(numericString, 10);
  
  return numericValue;
}




