import {DeckEditCategoryDTO} from './deck.edit.category.DTO';
import {Link} from '../link';

export class EditDeckDTO {
  public name: string;
  public description: string;
  public category: DeckEditCategoryDTO;
  public self: Link;

  constructor(name: string, description: string, category: DeckEditCategoryDTO, self: Link) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.self = self;
  }
}
