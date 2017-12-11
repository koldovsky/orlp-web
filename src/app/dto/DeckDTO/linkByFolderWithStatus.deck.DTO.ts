import {Link} from '../link';

export class DeckLinkByFolderWithStatus {

  public deckId: number;
  public name: String;
  public description: String;
  public rating: number;
  public self: Link;
  public cards: Link;
  public status: boolean;
  public synthax: String;

  constructor(name: String, description: String, rating: number, self: Link, cards: Link,
              deckId: number, status: boolean, synthax: String) {
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.self = self;
    this.cards = cards;
    this.deckId = deckId;
    this.status = status;
    this.synthax = synthax;
  }
}
