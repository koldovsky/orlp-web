import {Link} from './link';

export class Rating {
  public rating: number;
  public self: Link;

  constructor(rating: number, self: Link) {
    this.rating = rating;
    this.self = self;
  }
}
