import {Person} from "./Person";
import {Account} from "./Account";

export class User {
    person: Person;
    account: Account;

    constructor() {
        this.person = new Person();
        this.account = new Account;
    }
}