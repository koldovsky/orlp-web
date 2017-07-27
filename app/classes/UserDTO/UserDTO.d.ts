import { Link } from "../link";
export declare class UsersDTO {
    firstName: string;
    lastName: string;
    email: string;
    self: Link;
    folder: Link;
    constructor(firstName: string, lastName: string, email: string, self: Link, folder: Link);
}
