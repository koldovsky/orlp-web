import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoursePublic} from '../../../dto/CourseDTO/public.course.DTO';
import {UserCoursesService} from './user.courses.service';
import {ORLPService} from '../../../services/orlp.service';
import {Link} from '../../../dto/link';
import {TableColumnDTO} from '../../../dto/TableColumnDTO';
import {LogoutService} from '../../logout/logout.service';
import {MainComponent} from '../../main/main.component';
import {CoursePriceDTO} from "../../../dto/CourseDTO/price.course.DTO";


@Component({
  templateUrl: ('./user.courses.component.html'),
  styleUrls: [('./user.courses.component.css')]
})
export class UserCoursesComponent implements OnInit {

  courses: CoursePublic[];
  courseSelected: CoursePublic;
  public isAuthorizedAdmin: boolean;
  public isAuthenticated: boolean;
  errorMessage: string;
  listFilter: string;
  actionSort = true;
  currentPage = 1;
  lastPage: number;
  courseColumns: TableColumnDTO[] = [new TableColumnDTO('id', '#', '\u2191'), new TableColumnDTO('name', 'Course Name', '')
    , new TableColumnDTO('description', 'Course Description', ''), new TableColumnDTO('coursePrice.price', 'Course price', '')];
  selectedSortedParam: TableColumnDTO = this.courseColumns[0];
  reactiveForm: FormGroup;
  coursePriceDTO: CoursePriceDTO;


  constructor(private userCoursesService: UserCoursesService, private logoutService: LogoutService,
              private mainComponent: MainComponent, private orlpService: ORLPService, private fb: FormBuilder) {
    this.reactiveForm = fb.group({
      'price': ['', [Validators.pattern('([0-9]{0,6})')]]
    })
  }

  ngOnInit(): void {
    this.getCoursesByPage(this.currentPage);
    this.isAuthenticated = this.mainComponent.isAuthenticated;
    this.isAuthorizedAdmin = this.mainComponent.isAuthorizedAdmin;
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

  assignCourse(course: CoursePublic): void {
    this.courseSelected = course;
  }

  updatePrice(courseid: string, price: number): void{
    this.coursePriceDTO = new CoursePriceDTO(courseid, price);
    this.userCoursesService.updatePrice(this.coursePriceDTO)
      .subscribe( () => {
        this.getCoursesByPage(this.currentPage);
      });
  }

  deleteCourse(course: CoursePublic): void {
    this.userCoursesService.deleteCourse(course.self)
      .subscribe( () => {
        this.getCoursesByPage(this.currentPage);
      });
  }

  togglePaidOrFree(course: CoursePublic): void {
    if(course.coursePrice == null) {
      this.updatePrice(course.courseId, 0)
    }
    else {
      this.updatePrice(course.courseId, null)
    }
  }
}
