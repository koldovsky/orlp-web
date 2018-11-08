import {Link} from '../link';

export class CategorySearchDTO {
  public name: string;
  public description: string;
  public imageURL: string;
  public self: Link;

  constructor(name: string, description: string, imageURL: string, self: Link) {
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
    this.self = self;
  }
}
