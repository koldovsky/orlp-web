import {AdminDeck} from './admin.deck.DTO';

export class AdminDeckByPage {
  adminDecks: AdminDeck[];
  totalPages: number;

  constructor(adminDecks: AdminDeck[], totalPages: number) {
    this.adminDecks = adminDecks;
    this.totalPages = totalPages;
  }
}
