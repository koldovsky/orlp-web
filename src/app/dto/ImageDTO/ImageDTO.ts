import {Link} from '../link';

export class ImageDTO {
  public id: number;
  public isUsed: boolean;
  public self: Link;

  constructor(id: number, isUsed: boolean, self: Link) {
    this.id = id;
    this.isUsed = isUsed;
    this.self = self;
  }
}
