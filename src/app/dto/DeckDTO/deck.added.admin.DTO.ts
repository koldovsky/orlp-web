import {DeckEditCategoryDTO} from './deck.edit.category.DTO';

export class DeckAddedAdminDTO {
  public name: string;
  public description: string;
  public category: DeckEditCategoryDTO;

  constructor(name: string, description: string, category: DeckEditCategoryDTO) {
    this.name = name;
    this.description = description;
    this.category = category;
  }
}
