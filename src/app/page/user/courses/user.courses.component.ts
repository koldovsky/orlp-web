import {Component, OnInit} from '@angular/core';
import {CoursePublic} from '../../../dto/CourseDTO/public.course.DTO';
import {UserCoursesService} from './user.courses.service';
import {ORLPService} from '../../../services/orlp.service';
import {Link} from '../../../dto/link';

@Component({
  templateUrl: ('./user.courses.component.html'),
  styleUrls: [('./user.courses.component.css')]
})
export class UserCoursesComponent implements OnInit {

  courses: CoursePublic[];
  errorMessage: string;
  listFilter: string;
  actionSort = true;
  selectedSortedParam: string = 'id';
  currentPage: number = 1;
  lastPage: number;

  constructor(private userCoursesService: UserCoursesService, private orlpService: ORLPService) {
  }

  ngOnInit(): void {
    this.getCoursesByPage(this.currentPage);
  }

  getCourseLink(link: Link): string {
    return this.orlpService.getShortLink(link);
  }
  public getCoursesByPage(numberPage: number)  {
    this.userCoursesService.getCoursesByPage(numberPage, this.selectedSortedParam, this.actionSort)
      .subscribe(decks => {
        this.currentPage = numberPage;
        this.lastPage = decks.totalPages;
        this.courses = decks.courses;
      });
  }
  public sortBy(param: string) {
    if (param === this.selectedSortedParam) {
      this.actionSort = !this.actionSort;
    }else {
      this.actionSort = true;
    }
    this.selectedSortedParam = param;
    this.getCoursesByPage(this.currentPage);
  }
}
