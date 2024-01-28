import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { LoginInfo } from '../../models/login-info.model';
import { SignUpInfo } from '../../models/sign-up-info.model';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  authInfo: LoginInfo = {};
  signUpInfo: SignUpInfo = {personalBasicInfo: {}};
  phone_num: string = '';
  signUp: boolean = false;
  @Output() loginSuccess: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private cookieService: CookieService
  ){

  }
  loginSubmit(){
    this.authInfo.phone_num = convertStringToNumber(this.phone_num);
    if (!this.authInfo.phone_num || !this.authInfo.password) {
      this.showMessage('error', 'Error', 'Please fill in all fields');
      return;
    }
    this.authService.login(this.authInfo).subscribe({
        next: (response) => {
          console.log("Login successful:", response);
          this.cookieService.set('authToken', response.token, { expires: 1 }); // Set a cookie that expires in 1 day
          this.showMessage('success', 'Success', 'Login Success');
          this.loginSuccess.emit();
        },
        error: (error) => {
          this.showMessage('error', 'Error', error.error);
          // Handle the error
        },
        complete: () => {
          // Handle the completion if needed
          this.cleanInput();
        }
      });
  }
  signUpSubmit(){
    this.signUpInfo.personalBasicInfo.phone_num = convertStringToNumber(this.phone_num);
    if (!this.signUpInfo.personalBasicInfo.phone_num || !this.signUpInfo.password || !this.signUpInfo.personalBasicInfo.email) {
      this.showMessage('error', 'Error', 'Please fill in all fields');
      return;
    }
    console.log(this.signUpInfo);
    this.authService.register(this.signUpInfo).subscribe({
        next: (response) => {
          console.log("SignUp successful:", response);
          this.showMessage('success', 'Success', 'SignUp Success');
          this.loginSuccess.emit();
          // Handle the successful response
        },
        error: (error) => {
          console.error("SignUp error:", error);
          // Handle the error
        },
        complete: () => {
          // Handle the completion if needed
          this.cleanInput();
        }
      });
  }

  ngOnInit(): void {
  }



  toSignUp(){
    this.cleanInput();
    this.signUp = true;
  }
  toLogin(){
    this.cleanInput();
    this.signUp = false;
  }

  showMessage(_severity: any, _summary: any, _detail: any) {
    this.messageService.add({
      severity: _severity,
      summary: _summary,
      detail: _detail,
    });
  }

  cleanInput(){
    this.phone_num = '';
    this.authInfo = {};
    this.signUpInfo = { personalBasicInfo: {}};
    this.signUp = false;
  }

}

function convertStringToNumber(inputString: string) {
  // Remove all non-numeric characters (except the '+' sign, if present)
  const numericString = inputString.replace(/[^0-9]/g, '');
  
  // Parse the numeric string as an integer
  const numericValue = parseInt(numericString, 10);
  
  return numericValue;
}




