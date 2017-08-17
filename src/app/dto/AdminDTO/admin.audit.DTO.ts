import {Link} from '../link';

export class AdminAudit {
  accountEmail: string;
  action: string;
  ipAddress: string;
  role: string;
  time: string;
  public self: Link;

  constructor(accountEmail: string, action: string, ipAddress: string, role: string, time: string, self: Link) {
    this.accountEmail = accountEmail;
    this.action = action;
    this.ipAddress = ipAddress;
    this.role = role;
    this.time = time;
    this.self = self;
  }
}
