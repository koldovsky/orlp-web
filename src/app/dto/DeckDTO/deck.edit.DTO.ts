import {DeckEditCategoryDTO} from './deck.edit.category.DTO';
import {Link} from '../link';

export class EditDeckDTO {
  public category: string;
  public deckId: number;
  public name: string;
  public description: string;
  public categoryId: number;
  public self: Link;

  constructor(category: string, deckId: number, name: string, description: string, categoryId: number, self: Link) {
    this.category = category;
    this.deckId = deckId;
    this.name = name;
    this.description = description;
    this.categoryId = categoryId;
    this.self = self;
  }
}
