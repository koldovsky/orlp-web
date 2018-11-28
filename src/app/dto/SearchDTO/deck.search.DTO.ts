import {Link} from '../link';

export class DeckSearchDTO {
  public name: string;
  public description: string;
  public rating: number;
  public imageURL: string;
  public self: Link;
  public id: number;

  constructor(id: number, name: string, description: string, rating: number, imageURL: string, self: Link) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
    this.rating = rating;
    this.self = self;
  }
}
