import {Component, OnInit} from '@angular/core';
import {CoursePublic} from '../../../dto/CourseDTO/public.course.DTO';
import {UserCoursesService} from './user.courses.service';
import {ORLPService} from '../../../services/orlp.service';
import {Link} from '../../../dto/link';
import {TableColumnDTO} from '../../../dto/TableColumnDTO';

@Component({
  templateUrl: ('./user.courses.component.html'),
  styleUrls: [('./user.courses.component.css')]
})
export class UserCoursesComponent implements OnInit {

  courses: CoursePublic[];
  errorMessage: string;
  listFilter: string;
  actionSort = true;
  currentPage = 1;
  lastPage: number;
  courseColumns: TableColumnDTO[] = [new TableColumnDTO('id', '#', '\u2191'), new TableColumnDTO('name', 'Course Name', '')
    , new TableColumnDTO('description', 'Course Description', '')];
  selectedSortedParam: TableColumnDTO = this.courseColumns[0];

  constructor(private userCoursesService: UserCoursesService, private orlpService: ORLPService) {
  }

  ngOnInit(): void {
    this.getCoursesByPage(this.currentPage);
  }

  getCourseLink(link: Link): string {
    return this.orlpService.getShortLink(link);
  }
  public getCoursesByPage(numberPage: number)  {
    this.userCoursesService.getCoursesByPage(numberPage, this.selectedSortedParam.nameColumnParam, this.actionSort)
      .subscribe(decks => {
        this.currentPage = numberPage;
        this.lastPage = decks.totalPages;
        this.courses = decks.courses;
      });
  }
  public sortBy(param: TableColumnDTO) {
    if (param === this.selectedSortedParam) {
      this.actionSort = !this.actionSort;
    }else {
      this.actionSort = true;
      this.selectedSortedParam.symbolSorting = '';
    }
    if (this.actionSort) {
      param.symbolSorting = '\u2191';
    } else {
      param.symbolSorting = '\u2193';
    }

    this.selectedSortedParam = param;
    this.getCoursesByPage(this.currentPage);
  }
}
