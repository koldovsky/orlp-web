import {Component, OnInit} from '@angular/core';
import {CourseInfoService} from './courseInfo.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {ORLPService} from '../../services/orlp.service';
import {DeckPublic} from '../../dto/DeckDTO/public.deck.DTO';
import {LogoutService} from '../logout/logout.service';
import {CourseLinkWithId} from '../../dto/CourseDTO/linkWithId.course.DTO';
import {IStarRatingOnClickEvent} from 'angular-star-rating/star-rating-struct';
import {DeckService} from '../categoryInfo/deck/deck.service';
import {CourseService} from '../categoryInfo/course/course.service';
import {Rating} from '../../dto/Rating';
import {UserStatusChangeService} from '../userStatusChange/user.status.change.service';
import {NGXLogger} from 'ngx-logger';
import {CardComponent} from "../card/card.component";

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
  public isAuthorized: boolean;
  public showComment = false;
  public status: string;

  constructor(private route: ActivatedRoute,
              private orlp: ORLPService,
              private router:Router,
              private courseInfoService: CourseInfoService,
              private logoutService: LogoutService,
              private deckService: DeckService,
              private courseService: CourseService,
              private userStatusChangeService: UserStatusChangeService,
              private logger: NGXLogger) {
  }

  ngOnInit(): void {
    this.status = sessionStorage.getItem('status');
    this.sub = this.route.params.subscribe(
      params => {
        this.url = params['url'];
      }
    );
    this.takeCourse();
    this.isAuthorized = this.logoutService.isAuthorized();
  }

  takeCourse() {
    this.decodeLink();
    this.courseInfoService.getCourse(this.url).subscribe(
      course => {
        this.course = course;
        this.takeDecks(course);
      },
      error => this.errorMessage = <any>error
    );
  }

  private takeDecks(course: CourseLinkWithId) {
    this.courseInfoService.getDecks(course).subscribe(
      decks => {
        this.decks = decks;
        if (this.isAuthorized) {
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
    this.courseInfoService.getIdCoursesOfTheCurrentUser().subscribe(
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
    this.courseInfoService.addCourseToUser(this.course.courseId)
      .subscribe((response) => {
        this.logger.log(response);
        this.course.isUserOwnCourse = this.toggleStatus(this.course.isUserOwnCourse);
        this.getIdCoursesOwnByUser();
      }, (error) => {
        this.logger.log(error);
      });
  }

  buttonManage() {
    if (this.isAuthorized && !this.course.isUserOwnCourse) {
      this.addCourseToUserButton = 'addCourseToUserButtonActive';
    } else {
      if (this.isAuthorized && this.course.isUserOwnCourse) {
        this.addCourseToUserButton = 'addCourseToUserButtonChecked';
      } else {
        this.addCourseToUserButton = 'addCourseToUserButtonInActive';
      }
    }
  }

  private decodeLink() {
    this.url = this.orlp.decodeLink(this.url);
  }

  private toggleStatus(stat: boolean): boolean {
    if (stat === true) {
      return false;
    } else {
      return true;
    }
  }

  onCourseRatingClick = (event: IStarRatingOnClickEvent) => {
    const courseRating: Rating = new Rating(event.rating);
    this.courseService.addCourseRating(courseRating, this.course.courseId).subscribe(() => {
      this.course.rating = event.rating;
    }, (error) => {
      this.userStatusChangeService.handleUserStatusError(error.status);
    });
  }

  onDeckRatingClick = (deck: DeckPublic, event: IStarRatingOnClickEvent) => {
    const deckLocal: Rating = new Rating(event.rating);
    this.deckService.addDeckRating(deckLocal, deck.deckId).subscribe(() => {
      deck.rating = event.rating;
    }, (error) => {
      this.userStatusChangeService.handleUserStatusError(error.status);
    });
  }

  startLearning(deckId: number, deckSynthax: String): void {
    this.router.navigate(['/cards', '/api/decks/' + deckId + '/learn']);
    CardComponent.deckId = deckId;
    CardComponent.synthax = deckSynthax;
  }

  tabClick() {
    if (this.showComment === false) {
      this.showComment = true;
    } else {
      this.showComment = false;
    }
  }

  private downloadCards(deckId: number, deckName: string) {
    this.deckService.downloadCards(deckId, deckName);
  }
}
