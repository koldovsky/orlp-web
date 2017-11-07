export class UserRoleDTO {
  userId: number;
  authorities: string[];

  constructor(userId: number, authorities: string[]) {
    this.userId = userId;
    this.authorities = authorities;
  }
}
