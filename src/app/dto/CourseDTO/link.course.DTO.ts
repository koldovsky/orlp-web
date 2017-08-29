import {Link} from '../link';

export class CourseLink {
  public courseId: number;
  public name: string;
  public description: string;
  public image: string;
  public rating: number;
  public self: Link;
  public decks: Link;
  public published: boolean;
  public ownerId: number;
  public categoryId: number;

  constructor(courseId: number, name: string, description: string, image: string, self: Link, decks: Link, rating: number,
              published: boolean, ownerId: number, categoryId: number) {
    this.courseId = courseId;
    this.name = name;
    this.description = description;
    this.image = image;
    this.self = self;
    this.decks = decks;
    this.rating = rating;
    this.published = published;
    this.ownerId = ownerId;
    this.categoryId = categoryId;
  }
}
