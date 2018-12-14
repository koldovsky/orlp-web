import {DeckPublic} from './public.deck.DTO';
import {Link} from '../link';

export class DecksGetDTO extends DeckPublic {

  public isBought: boolean;

  constructor(deckId: number, name: string, description: string, rating: number, self: Link, price: number, isBought: boolean) {
    super(deckId, name, description, rating, self, price);

    this.isBought = isBought;
  }
}
