import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from './course.service';
import {ORLPService} from '../../../services/orlp.service';
import {CourseLink} from '../../../dto/CourseDTO/link.course.DTO';
import {CourseLinkWithStatus} from '../../../dto/CourseDTO/linkByUserWithStatus.course.DTO';
import {DeckPublic} from '../../../dto/DeckDTO/public.deck.DTO';
import {LogoutService} from '../../logout/logout.service';
import {IStarRatingOnClickEvent} from "angular-star-rating/star-rating-struct";
import {DeckService} from "../deck/deck.service";

@Component({
  selector: 'app-course-table',
  templateUrl: ('./course.component.html'),
  styleUrls: ['.././categoryInfo.css']
})

export class CourseComponent implements OnInit {
  public courses: CourseLink[];
  public decks: DeckPublic[];
  public clickedCourse: any;
  public isAuthorized: boolean;
  @Input() url: string;
  private coursesIdOfTheUser: number[] = [];
  private coursesWithStatus: CourseLinkWithStatus[] = [];

  constructor(private deckService: DeckService,
              private courseService: CourseService,
              private orlpService: ORLPService,
              private logoutService: LogoutService) {
  }


  ngOnInit(): void {
    this.url = this.orlpService.decodeLink(this.url);
    this.courseService.getCourse(this.url).subscribe(
      courses => {
        this.courses = courses;
        if (this.isAuthorized) {
          this.getCoursesIdOfTheUser();
        }
      });
    this.isAuthorized = this.logoutService.isAuthorized();
  }

  onRatingClick = (course: CourseLinkWithStatus, event:IStarRatingOnClickEvent) => {
    course.rating = event.rating;
    this.courseService.addCourseRating(course).subscribe(() => course.rating = event.rating);
  };

  getCoursesIdOfTheUser() {
    this.courseService.getCoursesIdOfTheUser().subscribe(
      id => {
        this.coursesIdOfTheUser = id;
        this.createCoursesWithStatus();
      });
  }

  setStatusForCoursesOfTheUser() {
    for (const entry of this.coursesWithStatus) {
      for (const id of this.coursesIdOfTheUser) {
        if (entry.courseId === id) {
          entry.status = true;
          break;
        }
      }
    }
  }

  createCoursesWithStatus() {
    for (const entry of this.courses) {
      this.coursesWithStatus.push(new CourseLinkWithStatus(
        entry.name,
        entry.description,
        entry.image,
        entry.self,
        entry.decks,
        entry.courseId,
        false,
        entry.rating
      ));
    }
    this.setStatusForCoursesOfTheUser();
  }

  addCourseToUser(courseId: number) {
    this.courseService.addCourseToUser(courseId).subscribe(
      () => {
        this.changeCourseStatus(courseId);
      },
      (error) => console.log(error)
    );
  }

  getDecks(course: CourseLinkWithStatus) {
    this.courseService.getDecks(course.decks)
      .subscribe(decks => this.decks = decks);
  }

  showDecks(course: CourseLinkWithStatus) {
    this.getDecks(course);
    this.clickedCourse = (this.clickedCourse === course.name) ? false : course.name;
  }

  changeCourseStatus(courseId: number) {
    for (const entry of this.coursesWithStatus) {
      if (entry.courseId === courseId) {
        entry.status = !entry.status;
      }
    }
  }

  onDeckRatingClick = (deck: DeckPublic, event: IStarRatingOnClickEvent) => {
    deck.rating = event.rating;
    this.deckService.addDeckRating(deck).subscribe(()=> deck.rating = event.rating);
  }
}
