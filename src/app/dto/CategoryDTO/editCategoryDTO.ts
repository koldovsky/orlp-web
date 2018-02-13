import {ImageDTO} from '../ImageDTO/ImageDTO';
import {Link} from "../link";

export class EditCategoryDTO {
  public name: string;
  public description: string;
  public image: ImageDTO;
  public link: Link;

  constructor(name: string, description: string, image: ImageDTO, link: Link) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.link = link;
  }
}
