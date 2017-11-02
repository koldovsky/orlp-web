import {DeckLinkByCategory} from './linkByCategory.deck.DTO';

export class DeckByCategoryAndPageDTO {
  public decks: DeckLinkByCategory[];
  public totalPages: number;

  constructor(decks: DeckLinkByCategory[], totalPages: number) {
    this.decks = decks;
    this.totalPages = totalPages;
  }
}
