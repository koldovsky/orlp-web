import {Link} from '../link';

export class CourseLinkWithId {
  public courseId: number;
  public name: string;
  public description: string;
  public image: string;
  public self: Link;
  public decks: Link;
  public isUserOwnCourse: boolean;
  public rating: number;

  constructor( courseId: number, name: string, description: string, rating: number, image: string, self: Link, decks: Link) {
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.image = image;
    this.self = self;
    this.decks = decks;
    this.courseId = courseId;
    this.isUserOwnCourse = false;
    this.rating = rating;
  }
}
