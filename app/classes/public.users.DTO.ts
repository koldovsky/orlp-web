import {Link} from "../../../../../../admin/classes/link";

export class UsersPublic {
    firstName: string;
    lastName: string;
    email: string;
    accountStatus: string;
    public self: Link;

    constructor(firstName: string, lastName: string, email: string, accountStatus: string, self: Link) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.accountStatus = accountStatus;
        this.self = self;
    }
}