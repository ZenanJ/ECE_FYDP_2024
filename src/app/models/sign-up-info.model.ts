import { PersonalBasicInfo } from "./personal-basic-info.model";

export interface SignUpInfo {
    personalBasicInfo: PersonalBasicInfo;
    password?: string;

}
