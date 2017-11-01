import {DeckDTO} from './DeckDTO';

export class AdminDeckPageDTO {
  public decks: DeckDTO[];
  public totalPages: number;

  constructor(decks: DeckDTO[], totalPages: number) {
    this.decks = decks;
    this.totalPages = totalPages;
  }
}
