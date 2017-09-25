import {Link} from '../link';

export class DeckDTO {
  public name: String;
  public description: String;
  public rating: number;
  public self: Link;
  public cards: Link;
  public ownerId: number;

  constructor(name: String, description: String, rating: number, self: Link, cards: Link, ownerId: number) {
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.self = self;
    this.cards = cards;
    this.ownerId = ownerId;
  }
}
