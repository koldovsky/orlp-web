import {Component, OnInit} from '@angular/core';
import {CoursePublic} from '../../../dto/CourseDTO/public.course.DTO';
import {UserCoursesService} from './user.courses.service';
import {ORLPService} from '../../../services/orlp.service';
import {Link} from '../../../dto/link';

@Component({
  templateUrl: ('./user.courses.component.html')
})
export class UserCoursesComponent implements OnInit {

  courses: CoursePublic[];
  errorMessage: string;
  listFilter: string;

  constructor(private userCoursesService: UserCoursesService, private orlpService: ORLPService) {
  }

  ngOnInit(): void {
    this.userCoursesService.getCourses()
      .subscribe(courses => this.courses = courses,
        error => this.errorMessage = <any>error);
  }

  getCourseLink(link: Link): string {
    return this.orlpService.getShortLink(link);
  }
}
