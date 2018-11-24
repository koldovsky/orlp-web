import {DeckPriceDTO} from "./DeckPriceDTO";

export class NewDeckDTO {
  public name: string;
  public description: string;
  public categoryId: number;
  public syntaxToHighlight: String;
  public deckPrice: DeckPriceDTO;

  constructor(name: string, description: string, categoryId: number, syntaxToHighlight: String,
              deckPrice: DeckPriceDTO) {
    this.name = name;
    this.description = description;
    this.categoryId = categoryId;
    this.syntaxToHighlight = syntaxToHighlight;
    this.deckPrice = deckPrice;
  }
}
