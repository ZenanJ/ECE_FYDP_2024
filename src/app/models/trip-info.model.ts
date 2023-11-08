import { PersonalBasicInfo } from "./personal-basic-info.model";
import { VehicleInfo } from "./vehicle-info.model";

export interface TripInfo {
    tripID: string;
    driver: PersonalBasicInfo;
    passenger: PersonalBasicInfo[];
    startTime: number;
    vehicle: VehicleInfo;
}
