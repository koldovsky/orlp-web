import {Link} from '../link';

export class DeckLinkByCategory {

  public deckId: number;
  public name: string;
  public description: string;
  public rating: number;
  public self: Link;
  public cards: Link;
  public hidden: boolean;
  public synthax: string;
  public ownerId: number;
  public price: number;
  public isBought: boolean;

  constructor(name: string, description: string, rating: number, self: Link, cards: Link,
              deckId: number, hidden: boolean, synthax: string, ownerId: number, price: number, isBought: boolean) {
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.self = self;
    this.cards = cards;
    this.deckId = deckId;
    this.hidden = hidden;
    this.synthax = synthax;
    this.ownerId = ownerId;
    this.price = price;
    this.isBought = isBought;
  }

}
