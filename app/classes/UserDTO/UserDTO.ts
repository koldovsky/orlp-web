import {Link} from "../link";
export class UsersDTO {
    firstName: string;
    lastName: string;
    email: string;
    self: Link;
    folder: Link;

    constructor(firstName: string, lastName: string, email: string, self: Link, folder: Link) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.self = self;
        this.folder = folder;
    }
}