import { Injectable } from '@angular/core';
import { PersonalBasicInfo } from '../models/personal-basic-info.model';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  constructor() { }

  //provide fake personal info

  personalInfo: PersonalBasicInfo = {
    personalID: 111,
    phoneNum: 123123123,
    firstName: "eric",
    lastName: "jiang",
    email: "z242jian@gmail"  }


}
