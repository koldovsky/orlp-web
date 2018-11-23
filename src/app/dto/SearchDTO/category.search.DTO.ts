import {Link} from '../link';

export class CategorySearchDTO {
  public id: number;
  public name: string;
  public description: string;
  public imageURL: string;
  public self: Link;

  constructor(id: number, name: string, description: string, imageURL: string, self: Link) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
    this.self = self;
  }
}
