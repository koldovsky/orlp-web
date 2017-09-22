import {Link} from '../link';

export class CourseRating {
  public courseId: number;
  public rating: number;
  public self: Link;

  constructor(courseId: number, rating: number, self: Link) {
    this.courseId = courseId;
    this.rating = rating;
    this.self = self;
  }
}
