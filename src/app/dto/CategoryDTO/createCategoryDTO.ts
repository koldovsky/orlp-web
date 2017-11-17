
import {ImageDTO} from '../ImageDTO/ImageDTO';

export class CreateCategoryDTO {
  public name: string;
  public description: string;
  public image: ImageDTO;

  constructor(name: string, description: string, image: ImageDTO) {
    this.name = name;
    this.description = description;
    this.image = image;
  }
}
