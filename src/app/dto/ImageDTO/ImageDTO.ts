import {Link} from '../link';

export class ImageDTO {
  public id: number;
  public isImageUsed: boolean;
  public self: Link;

  constructor(id: number, isUsed: boolean, self: Link) {
    this.id = id;
    this.isImageUsed = isUsed;
    this.self = self;
  }
}
