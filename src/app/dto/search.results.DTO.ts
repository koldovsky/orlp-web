import {Link} from './link';

export class SearchResults {
  public name: string;
  public description: string;
  public rating: number;
  public image: string;
  public resultType: string;
  public self: Link;

  constructor(name: string, description: string, rating: number, image: string, resultType: string, self: Link) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.rating = rating;
    this.resultType = resultType;
    this.self = self;
  }
}
