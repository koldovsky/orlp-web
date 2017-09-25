import {Link} from '../link';

export class UserDTO {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  self: Link;
  folder: Link;
  courses: Link;

  constructor(id: number, firstName: string, lastName: string, email: string, self: Link, folder: Link, courses: Link) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.self = self;
    this.folder = folder;
    this.courses = courses;
  }
}
