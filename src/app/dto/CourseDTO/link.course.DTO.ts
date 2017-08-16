import {Link} from '../link';

export class CourseLink {
  public name: string;
  public description: string;
  public image: string;
  public rating: number;
  public self: Link;
  public decks: Link;

  constructor(name: string, description: string, image: string, self: Link, decks: Link, rating: number) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.self = self;
    this.decks = decks;
    this.rating = rating;
  }
}
