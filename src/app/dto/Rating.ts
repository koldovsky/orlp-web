import {Link} from './link';

export class Rating {
  public id: number;
  public rating: number;
  public self: Link;

  constructor(id: number, rating: number, self: Link) {
    this.id = id;
    this.rating = rating;
    this.self = self;
  }
}
