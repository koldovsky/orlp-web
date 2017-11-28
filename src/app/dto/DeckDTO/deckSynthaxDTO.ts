import {Link} from '../link';

export class DeckSynthaxDTO {
  public synthax: string;
  public deckId: number;
  public self: Link;

  constructor(synthax: string, deckId: number, self: Link) {
    this.synthax = synthax;
    this.deckId = deckId;
    this.self = self;
  }
}
