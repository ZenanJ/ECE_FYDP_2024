import { VehicleInfo } from "./vehicle-info.model";

export interface PersonalBasicInfo {
    personalID: number;
    phoneNum: number;
    firstName: string;
    lastName: string;
    email: string;
    vehicle?: VehicleInfo;
}
