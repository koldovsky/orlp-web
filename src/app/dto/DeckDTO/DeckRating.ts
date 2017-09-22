import {Link} from '../link';

export class DeckRating {
  public deckId: number;
  public rating: number;
  public self: Link;

  constructor(deckId: number, rating: number, self: Link) {
    this.deckId = deckId;
    this.rating = rating;
    this.self = self;
  }
}
