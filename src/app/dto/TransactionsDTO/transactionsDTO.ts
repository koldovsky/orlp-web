export class TransactionsDTO{
  userFromEmail: number;
  userToEmail: number;
  points: number;
  creationDate: number;

  constructor(userFromEmail: number, userToEmail: number, points:number, creationDate: number){
    this.userFromEmail = userFromEmail;
    this.userToEmail = userToEmail;
    this.points = points;
    this.creationDate = creationDate;
  }
}
