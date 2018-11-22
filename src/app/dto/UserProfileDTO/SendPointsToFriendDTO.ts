export class SendPointsToFriendDTO {
  emailFrom: string;
  emailTo: string;
  points: number;

  constructor(emailFrom: string, emailTo: string, points: number) {
    this.emailFrom = emailFrom;
    this.emailTo = emailTo;
    this.points = points;
  }
}
