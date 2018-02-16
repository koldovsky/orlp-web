import {Link} from '../link';

export class ProfileDataDTO {
  email: string;
  firstName: string;
  lastName: string;
  imageBase64: string;
  authenticationType: string;
  self: Link;

  constructor(email: string, firstName: string, lastName: string, imageBase64: string, authenticationType: string, self: Link) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageBase64 = imageBase64;
    this.authenticationType = authenticationType;
    this.self = self;
  }
}
