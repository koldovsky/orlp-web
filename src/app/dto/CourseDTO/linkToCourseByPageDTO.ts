import {CoursePublic} from "./public.course.DTO";

export class CoursePageDTO {
  public courses: CoursePublic[];
  public totalPages: number;

  constructor(content: CoursePublic[], totalPages: number) {
    this.courses = content;
    this.totalPages = totalPages;
  }
}
