import { Link } from "./link";
export declare class UserDetailsDto {
    firstName: string;
    lastName: string;
    email: string;
    self: Link;
    constructor(firstName: string, lastName: string, email: string, self: Link);
}
