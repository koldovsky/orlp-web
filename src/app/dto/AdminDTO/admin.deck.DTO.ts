import {Link} from '../link';

export class AdminDeck {
  public deckId: number;
  public name: string;
  public description: string;
  public rating: number;
  public category: string;
  public owner: string;
  public self: Link;
  constructor(deckId: number, name: string, description: string, rating: number, category: string, owner: string, self: Link ) {
    this.deckId = deckId;
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.category = category;
    this.owner = owner;
    this.self = self;
  }
}
