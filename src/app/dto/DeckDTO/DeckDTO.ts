import {Link} from '../link';
import {DeckPriceDTO} from "./DeckPriceDTO";

export class DeckDTO {
  public deckId: number;
  public name: string;
  public description: string;
  public category: string;
  public categoryId: number;
  public rating: number;
  public owner: string;
  public cards: Link;
  public self: Link;
  public hidden: boolean;
  public synthax: string;
  public ownerId: number;
  public deckPrice: DeckPriceDTO;

  constructor(deckId: number, name: string, description: string, category: string, categoryId: number,
              rating: number, owner: string, cards: Link, self: Link, hidden: boolean, synthax: string,
              ownerId: number, deckPrice: DeckPriceDTO
  ) {
    this.deckId = deckId;
    this.name = name;
    this.description = description;
    this.category = category;
    this.categoryId = categoryId;
    this.rating = rating;
    this.owner = owner;
    this.cards = cards;
    this.self = self;
    this.hidden = hidden;
    this.synthax = synthax;
    this.ownerId = ownerId;
    this.deckPrice=deckPrice;

  }
}

