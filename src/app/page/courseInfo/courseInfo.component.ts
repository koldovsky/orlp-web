import {Component, OnInit} from '@angular/core';
import {CourseInfoService} from './courseInfo.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {ORLPService} from '../../services/orlp.service';
import {DeckPublic} from '../../dto/DeckDTO/public.deck.DTO';
import {LogoutService} from '../logout/logout.service';
import {CourseLinkWithId} from '../../dto/CourseDTO/linkWithId.course.DTO';
@Component({
  templateUrl: ('./courseInfo.component.html'),
  styleUrls: ['./courseInfo.css']
})
export class CourseInfoComponent implements OnInit {
  private url: string;
  decks: DeckPublic[];
  private sub: Subscription;
  errorMessage: string;
  course: CourseLinkWithId;
  public addCourseToUserButton: string;
  private coursesIdExistsInUser: number[] = [];

  constructor(private route: ActivatedRoute,
              private orlp: ORLPService,
              private courseService: CourseInfoService,
              private logoutService: LogoutService) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        this.url = params['url'];
      }
    );
    this.takeCourse();
  }

  takeCourse() {
    this.decodeLink();
    this.courseService.getCourse(this.url).subscribe(
      course => {
        this.course = course;
        this.takeDecks(course);
      },
      error => this.errorMessage = <any>error
    );
  }

  private takeDecks(course: CourseLinkWithId) {
    this.courseService.getDecks(course).subscribe(
      decks => {
        this.decks = decks;
        if (this.isAuthorized()) {
          this.getIdCoursesOwnByUser();
        }
        this.buttonManage();
      },
      error => {
        this.errorMessage = <any>error;
      },
    );
  }

  getIdCoursesOwnByUser() {
    this.courseService.getIdCoursesOfTheCurrentUser().subscribe(
      id => {
        this.coursesIdExistsInUser = id;
        this.changeCourseStatus(this.course.courseId);
      });
  }

  changeCourseStatus(id: number) {
    for (const entry of this.coursesIdExistsInUser) {
      if (entry === this.course.courseId) {
        this.course.isUserOwnCourse = true;
      }
    }
    this.buttonManage();
  }

  addCourseToUser() {
    console.log(this.course.courseId);
    this.courseService.addCourseToUser(this.course.courseId)
      .subscribe((response) => {
        console.log(response);
        this.course.isUserOwnCourse = this.toggleStatus(this.course.isUserOwnCourse);
        this.getIdCoursesOwnByUser();
      }, (error) => {
        console.log(error);
      });
  }

  buttonManage() {
    if (this.isAuthorized() && !this.course.isUserOwnCourse) {
      this.addCourseToUserButton = 'addCourseToUserButtonActive';
    } else {
      if (this.isAuthorized() && this.course.isUserOwnCourse) {
        this.addCourseToUserButton = 'addCourseToUserButtonChecked';
      } else{
        this.addCourseToUserButton = 'addCourseToUserButtonInActive';
      }
    }
  }

  private decodeLink() {
    this.url = this.orlp.decodeLink(this.url);
  }

  isAuthorized(): boolean {
    return this.logoutService.isAuthorized();
  }

  private toggleStatus(stat: boolean): boolean {
    if (stat === true) {
      return false;
    } else {
      return true;
    }
  }
}
