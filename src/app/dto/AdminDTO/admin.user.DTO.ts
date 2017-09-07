import {Link} from '../link';

export class AdminUsers {
  public firstName: string;
  public lastName: string;
  public email: string;
  public accountStatus: string;
  public self: Link;

  constructor(firstName: string, lastName: string, email: string, accountStatus: string, self: Link) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.accountStatus = accountStatus;
    this.self = self;
  }
}
