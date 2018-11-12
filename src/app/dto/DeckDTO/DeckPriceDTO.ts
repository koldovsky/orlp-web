import {NewDeckDTO} from "./deck.added.DTO";

export class DeckPriceDTO {
  public deck: NewDeckDTO;
  public price: number;

  constructor(price: number, deck?: NewDeckDTO) {
    this.deck = deck;
    this.price =price;
  }
}
