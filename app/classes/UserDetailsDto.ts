import {Link} from "./link";

export class UserDetailsDto{
    firstName: string;
    lastName: string;
    email: string;
    public self: Link;

    constructor(firstName: string, lastName: string, email: string, self: Link) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.self = self;
    }
}