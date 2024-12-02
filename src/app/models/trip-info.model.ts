import { PersonalBasicInfo } from "./personal-basic-info.model";
import { VehicleInfo } from "./vehicle-info.model";

export interface TripInfo {
    tripID: string;              // Unique identifier for the trip
    departure: string;           // Departure location
    destination: string;         // Destination location
    departureTime: string;       // Departure time (use string if it needs formatting)
    seatsAvailable: number;      // Number of seats available
    price: number;               // Price of the trip
    driverName: string;          // Name of the driver
    driver: PersonalBasicInfo;   // Driver's personal information (if needed)
    vehicle: VehicleInfo;        // Vehicle information for the trip
    isDriverPost: boolean;
    isActivate: boolean;
}
