import {ImageDTO} from '../ImageDTO/ImageDTO';
import {Link} from '../link';

export class EditCourse {
  public courseId: string;
  public name: string;
  public description: string;
  public image: ImageDTO;
  public coursePrice: number;
  public self: Link;

  constructor(courseId: string, name: string, description: string, image: ImageDTO, coursePrice: number, self: Link) {
    this.courseId = courseId;
    this.name = name;
    this.description = description;
    this.image = image;
    this.coursePrice = coursePrice;
    this.self = self;
  }
}
