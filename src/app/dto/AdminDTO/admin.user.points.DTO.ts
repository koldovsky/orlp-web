export class SetPointsByAdminDTO {
  public email: string;
  public points: number;

  constructor(email: string, points: number) {
    this.email = email;
    this.points = points;
  }
}
