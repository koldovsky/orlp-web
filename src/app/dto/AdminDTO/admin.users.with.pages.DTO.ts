import {AdminUsers} from './admin.user.DTO';

export class AdminUsersByPage {
  users: AdminUsers[];
  totalPages: number;

  constructor(users: AdminUsers[], totalPages: number) {
    this.users = users;
    this.totalPages = totalPages;
  }
}
