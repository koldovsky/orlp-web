import {Link} from '../link';

export class ImageDTO {
  public id: number;
  public self: Link;

  constructor(id: number, self: Link) {
    this.id = id;
    this.self = self;
  }
}
