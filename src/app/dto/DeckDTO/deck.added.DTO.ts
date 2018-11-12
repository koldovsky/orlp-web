import {DeckPriceDTO} from "./DeckPriceDTO";

export class NewDeckDTO {
  public name: string;
  public description: string;
  public categoryId: number;
  public synthaxToHighlight: String;
  public deckPrice: DeckPriceDTO;

  constructor(name: string, description: string, categoryId: number, synthaxToHighlight: String,
              deckPrice: DeckPriceDTO) {
    this.name = name;
    this.description = description;
    this.categoryId = categoryId;
    this.synthaxToHighlight = synthaxToHighlight;
    this.deckPrice = deckPrice;
  }
}
