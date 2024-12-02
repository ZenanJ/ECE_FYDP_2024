import { PersonalBasicInfo } from "./personal-basic-info.model";
import { VehicleInfo } from "./vehicle-info.model";

export interface SignUpInfo {
    personalID?: number;
    phoneNum?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    vehicle?: VehicleInfo;
    password?: string;

}
