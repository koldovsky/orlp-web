import {Link} from '../link';
import {ImageDTO} from '../ImageDTO/ImageDTO';

export class EditCourseDTO {
  description: String;
  name: String;
  image: ImageDTO;
  price: number;
  link: Link;

  constructor(description: String, name: String, image: ImageDTO, coursePrice: number, link: Link) {
    this.description = description;
    this.name = name;
    this.image = image;
    this.price = coursePrice;
    this.link = link;
  }
}
