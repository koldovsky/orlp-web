import { Link } from "./link";
export declare class UserDetailsDto {
    firstName: string;
    lastName: string;
    email: string;
    authorities: string[];
    self: Link;
    constructor(firstName: string, lastName: string, email: string, authorities: string[], self: Link);
}
