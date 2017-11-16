import {Link} from './link';

export class UserDetailsDto {
    firstName: string;
    lastName: string;
    email: string;
    imageType: string;
    imageBase64: string;
    image: string;
    authenticationType: string;
    authorities: string[];
    accountStatus: string;
    deactivated: boolean;
    public self: Link;


  constructor(firstName: string, lastName: string, email: string, imageType: string, imageBase64: string,
              image: string, authenticationType: string, authorities: string[], accountStatus: string, deactivated: boolean, self: Link) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.imageType = imageType;
    this.imageBase64 = imageBase64;
    this.image = image;
    this.authenticationType = authenticationType;
    this.authorities = authorities;
    this.accountStatus = accountStatus;
    this.deactivated = deactivated;
    this.self = self;
  }
}
