import {Link} from '../link';

export class CategoryLink {
  public categoryId: number;
  public name: string;
  public description: string;
  public image: string;
  public self: Link;
  public decks: Link;
  public courses: Link;


  constructor(categoryId: number, name: string, description: string, image: string, self: Link, decks: Link, courses: Link) {
    this.categoryId = categoryId;
    this.name = name;
    this.description = description;
    this.image = image;
    this.self = self;
    this.decks = decks;
    this.courses = courses;
  }
}
