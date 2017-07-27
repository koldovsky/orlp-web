import {Link} from "./link";

export class UserDetailsDto{
    firstName: string;
    lastName: string;
    email: string;
    authorities: string[];
    public self: Link;

    constructor(firstName: string, lastName: string, email: string, authorities: string[], self: Link) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.authorities = authorities;
        this.self = self;
    }
}