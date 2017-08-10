import {Link} from '../link';

export class CourseLinkWithId {
  public courseId: number;
  public name: string;
  public description: string;
  public imagebase64: string;
  public self: Link;
  public decks: Link;
  public isUserOwnCourse: boolean;

  constructor( courseId: number, name: string, description: string, imagebase64: string, self: Link, decks: Link) {
    this.name = name;
    this.description = description;
    this.imagebase64 = imagebase64;
    this.self = self;
    this.decks = decks;
    this.courseId = courseId;
    this.isUserOwnCourse = false;
  }
}
