import {CourseLink} from "./link.course.DTO";

export class CoursesByCategoryAndPageDTO {
  public courseLinks: CourseLink[];
  public totalPages: number;


  constructor(content: CourseLink[], totalPages: number) {
    this.courseLinks = content;
    this.totalPages = totalPages;
  }
}
