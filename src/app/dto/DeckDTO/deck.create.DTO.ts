import {Link} from '../link';

export class CreateDeckDTO {
  public name: string;
  public description: string;
  public categoryId: number;
  public self: Link;

  constructor(name: string, description: string, categoryId: number, self: Link) {
    this.name = name;
    this.description = description;
    this.categoryId = categoryId;
    this.self = self;
  }
}
