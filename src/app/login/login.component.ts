import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { LoginInfo } from '../models/login-info.model';
import { SignUpInfo } from '../models/sign-up-info.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginInfo: LoginInfo = {};
  signUpInfo: SignUpInfo = {};
  signUp: boolean = false;


  constructor(
    private loginService: LoginService
  ){

  }
  loginSubmit(){
    console.log("loginSubmit");
    this.loginService.loginSubmit(this.loginInfo);
  }
  signUpSubmit(){
    console.log("signupSubmit");
  }

  ngOnInit(): void {
  }



  toSignUp(){
    this.loginInfo = {};
    this.signUp = true;
  }
  toLogin(){
    this.signUpInfo = {};
    this.signUp = false;
  }
}
