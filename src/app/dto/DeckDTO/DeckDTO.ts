import {Link} from '../link';

export class DeckDTO {
  public deckId: number;
  public name: string;
  public description: string;
  public category: string;
  public categoryId: number;
  public rating: number;
  public owner: string;
  public cards: Link;
  public self: Link;

  constructor(deckId: number, name: string, description: string, category: string, categoryId: number,
              rating: number, owner: string, cards: Link, self: Link) {
    this.deckId = deckId;
    this.name = name;
    this.description = description;
    this.category = category;
    this.categoryId = categoryId;
    this.rating = rating;
    this.owner = owner;
    this.cards = cards;
    this.self = self;
  }
}

