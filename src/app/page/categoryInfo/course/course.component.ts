import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from './course.service';
import {ORLPService} from '../../../services/orlp.service';
import {CourseLink} from '../../../dto/CourseDTO/link.course.DTO';
import {CourseLinkWithStatus} from '../../../dto/CourseDTO/linkByUserWithStatus.course.DTO';
import {DeckPublic} from '../../../dto/DeckDTO/public.deck.DTO';
import {LogoutService} from '../../logout/logout.service';
import {IStarRatingOnClickEvent} from 'angular-star-rating/star-rating-struct';
import {DeckService} from '../deck/deck.service';
import {Rating} from '../../../dto/Rating';
import {NumberOfCardsThatNeedRepeatingDTO} from '../../../dto/number.of.cards.that.need.repeating.dto';
import {UserStatusChangeService} from '../../userStatusChange/user.status.change.service';
import {NGXLogger} from 'ngx-logger';
import {Router} from "@angular/router";
import {CardComponent} from "../../card/card.component";

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
  coursesWithStatus: CourseLinkWithStatus[] = [];
  @Input() categoryId: number;
  actionSort = true;
  selectedSortedParam = 'id';
  currentPage = 1;
  lastPage: number;
  numbersOfCardsThatNeedRepeating: NumberOfCardsThatNeedRepeatingDTO[] = [];
  public status: string;

  constructor(private deckService: DeckService,
              private courseService: CourseService,
              private router: Router,
              private orlpService: ORLPService,
              private logoutService: LogoutService,
              private userStatusChangeService: UserStatusChangeService,
              private logger: NGXLogger) {
  }


  ngOnInit(): void {
    this.status = sessionStorage.getItem('status');
    this.url = this.orlpService.decodeLink(this.url);
    this.getCoursesByPage(this.currentPage);
    this.isAuthorized = this.logoutService.isAuthorized();
  }

  public getCoursesByPage(numberPage: number)  {
    this.courseService.getCourses(this.categoryId, numberPage, this.selectedSortedParam, this.actionSort)
      .subscribe(value => {
        this.currentPage = numberPage;
        this.courses = value.courseLinks;
        this.lastPage = value.totalPages;
        this.createCoursesWithStatus();
        if (this.isAuthorized) {
          this.getCoursesIdOfTheUser();
        }
      });
  }

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
    this.coursesWithStatus = [];
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
      (error) => this.logger.error(error)
    );
  }

  getDecks(course: CourseLinkWithStatus) {
    this.courseService.getDecks(course.decks)
      .subscribe(decks => {
        this.decks = decks;
        if (this.isAuthorized) {
          for (const deck of decks) {
            this.deckService.countCardsThatNeedRepeating(deck.deckId)
              .subscribe(numberOfCardsThatNeedRepeating => this.numbersOfCardsThatNeedRepeating.push(
                new NumberOfCardsThatNeedRepeatingDTO(deck.deckId, numberOfCardsThatNeedRepeating)));
          }
        }
      });
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

  onCourseRatingClick = (course: CourseLinkWithStatus, event: IStarRatingOnClickEvent) => {
    const courseRating: Rating = new Rating( event.rating);
    this.courseService.addCourseRating(courseRating, course.courseId).subscribe(() => {
      course.rating = event.rating; }, (error) => {
      this.userStatusChangeService.handleUserStatusError(error.status);
    });
  }

  onDeckRatingClick = (deck: DeckPublic, event: IStarRatingOnClickEvent) => {
    const deckRating: Rating = new Rating(event.rating);
    this.deckService.addDeckRating(deckRating, deck.deckId).subscribe(() => {
      deck.rating = event.rating; }, (error) => {
      this.userStatusChangeService.handleUserStatusError(error.status);
    });
  }

  startLearning(deckId: number, deckSynthax: String): void {
    this.router.navigate(['/cards', '/api/decks/' + deckId + '/learn']);
    CardComponent.deckId = deckId;
    CardComponent.synthax = deckSynthax;
  }

  getNumberOfCardsThatNeedRepeating(deckId: number): number {
    for (const value of this.numbersOfCardsThatNeedRepeating) {
      if (value.deckId === deckId) {
        return value.numberOfCardsThatNeedRepeating;
      }
    }
  }
}
