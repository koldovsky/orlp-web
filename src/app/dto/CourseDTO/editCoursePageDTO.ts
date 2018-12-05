import {EditCourse} from './edit.course';

export class EditCoursePageDTO {
  public courses: EditCourse[];
  public totalPages: number;

  constructor(content: EditCourse[], totalPages: number) {
    this.courses = content;
    this.totalPages = totalPages;
  }
}
