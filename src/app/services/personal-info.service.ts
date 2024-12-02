import { Injectable } from '@angular/core';
import { PersonalBasicInfo } from '../models/personal-basic-info.model';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  _personalInfo?: PersonalBasicInfo;
  _isAuthenticated: boolean = false;

  private personalInfoSubject = new BehaviorSubject<PersonalBasicInfo>({
    personalID: 1,
    phoneNum: 1234567890,
    firstName: 'Test',
    lastName: 'User',
    email: 'ZenanJ@example.com',
  });
  personalInfo$ = this.personalInfoSubject.asObservable();

  constructor(
    private authService: AuthService
  ) { 
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this._isAuthenticated = isAuthenticated;
    });
    this.authService.personalInfo$.subscribe((personalInfo) => {
      this.personalInfoSubject.next(personalInfo);
    });
  }

}
