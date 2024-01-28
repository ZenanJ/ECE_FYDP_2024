import { VehicleInfo } from "./vehicle-info.model";

export interface PersonalBasicInfo {
    personalID?: number;
    phone_num?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    vehicle?: VehicleInfo;
}
