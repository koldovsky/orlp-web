import {Link} from '../link';

export class CourseLinkWithStatus {
  public name: string;
  public description: string;
  public image: string;
  public self: Link;
  public decks: Link;
  public courseId: number;
  public status: boolean;
  public rating: number;

  constructor(name: string, description: string, image: string, self: Link, decks: Link, courseId: number, status: boolean, rating: number) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.self = self;
    this.decks = decks;
    this.courseId = courseId;
    this.status = status;
    this.rating = rating;
  }
}
