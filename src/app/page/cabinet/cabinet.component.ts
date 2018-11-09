import {Component, OnInit} from '@angular/core';
import {CabinetService} from './cabinet.service';
import {UserDTO} from '../../dto/UsersDTO/UserDTO';
import {Link} from '../../dto/link';
import {Router} from '@angular/router';
import {CourseLink} from '../../dto/CourseDTO/link.course.DTO';
import {DeckLinkByCategory} from '../../dto/DeckDTO/linkByCategory.deck.DTO';
import {CardComponent} from '../card/card.component';
import {IStarRatingOnClickEvent} from 'angular-star-rating/star-rating-struct';
import {DeckPublic} from '../../dto/DeckDTO/public.deck.DTO';
import {DeckService} from '../categoryInfo/deck/deck.service';
import {CourseService} from '../categoryInfo/course/course.service';
import {Rating} from '../../dto/Rating';
import {NumberOfCardsThatNeedRepeatingDTO} from '../../dto/number.of.cards.that.need.repeating.dto';
import {UserStatusChangeService} from '../userStatusChange/user.status.change.service';
import {NGXLogger} from 'ngx-logger';
import {DeckDTO} from "../../dto/DeckDTO/DeckDTO";

@Component({
  providers: [CabinetService],
  templateUrl: ('./cabinet.component.html'),
  styleUrls: ['cabinet.css']
})

export class CabinetComponent implements OnInit {
  public user: UserDTO;
  public courses: CourseLink[];
  public decks: DeckLinkByCategory[];
  public categoryDecks: DeckLinkByCategory[];
  public showCourseDecks: any;
  public showFolderDecks = true;
  public chosenCourse: CourseLink;
  public showAlertdeck = true;
  public showAlertcouse = true;
  numbersOfCardsThatNeedRepeating: NumberOfCardsThatNeedRepeatingDTO[] = [];
  public status: string;

  constructor(private deckService: DeckService,
              private courseService: CourseService,
              private cabinetService: CabinetService,
              private router: Router,
              private userStatusChangeService: UserStatusChangeService,
              private logger: NGXLogger) {

  }

  ngOnInit(): void {
    this.status = sessionStorage.getItem('status');
    this.getUser();
  }

  getUser(): void {
    this.cabinetService.getUser()
      .subscribe(user => {
          this.user = user;
          this.getUserCourses(user);
          this.decks = null;
          this.getDecks(user.folder);
        }
      );
  }

  getUserCourses(user: UserDTO): void {
    this.cabinetService.getCourses(user.courses)
      .subscribe(courses => {
        this.courses = courses;
        if (courses.length > 0) {
          this.showAlertcouse = false;
        }
      });

  }

  getDecks(link: Link): void {
    this.cabinetService.getDecks(link)
      .subscribe(decks => {
        this.decks = decks;

        if (decks.length > 0) {
          this.showAlertdeck = false;
        }
        for (const deck of this.decks) {
          this.deckService.countCardsThatNeedRepeating(deck.deckId)
            .subscribe(numberOfCardsThatNeedRepeating => this.numbersOfCardsThatNeedRepeating.push(
              new NumberOfCardsThatNeedRepeatingDTO(deck.deckId, numberOfCardsThatNeedRepeating)));
        }
      });
  }

  startLearning(deckId: number): void {
    this.router.navigate(['/cards', '/api/decks/' + deckId + '/learn']);
    CardComponent.deckId = deckId;
  }

  getFolderDecks() {
    this.decks = null;
    this.getDecks(this.user.folder);
    this.showFolderDecks = !this.showFolderDecks;
    this.showCourseDecks = false;
  }

  getCourseDecks(course: CourseLink) {
    this.decks = null;
    this.showFolderDecks = false;
    this.getDecks(course.decks);
    this.showCourseDecks = (this.showCourseDecks === course.courseId) ? false : course.courseId;
  }

  deleteCourse(course: CourseLink) {
    if (this.isOwnerCourse(course)) {
      this.cabinetService.deleteGlobalCourse(course)
        .subscribe((response) => this.getUserCourses(this.user));
    } else {
      this.cabinetService.deleteLocalCourse(course)
        .subscribe((response) => this.getUserCourses(this.user));
    }
  }

  isOwnerCourse(course: CourseLink): boolean {
    return course.ownerId === this.user.id;
  }

  isOwnerDeck(deck: DeckDTO): boolean {
    return deck.ownerId === this.user.id;
  }

  changeAccess(course: CourseLink, access: boolean) {
    course.published = access;

    this.cabinetService.updateCourse(course)
      .subscribe((response) => this.logger.log(response));
  }

  changeAccessDeck(deck: DeckLinkByCategory) {
    this.cabinetService.toggleDeck(deck).subscribe(response => {
      deck.hidden = response.hidden;
    });
  }

  getCategoryDecks(course: CourseLink) {
    this.showFolderDecks = false;
    this.showCourseDecks = course.courseId;
    this.cabinetService.getDecks(course.decks)
      .subscribe(decks => {
        this.decks = decks;
        this.chosenCourse = course;
        this.cabinetService.getCategoryDecks(course.categoryId)
          .subscribe((filterDecks) => {
            this.categoryDecks = filterDecks.filter(deck => !this.decks.some(deckInCourse => deckInCourse.deckId === deck.deckId));
          });
      });
  }

  addDeckToCourse(deck: DeckLinkByCategory) {
    deck.hidden = true;
    this.cabinetService.addDeckToCourse(this.chosenCourse.courseId, deck.deckId)
      .subscribe(() => this.cabinetService.getDecks(this.chosenCourse.decks)
          .subscribe(decks => this.decks = decks),
        error => deck.hidden = false);
  }

  deleteFolderDeck(deck: DeckLinkByCategory) {
    this.cabinetService.deleteDeck(deck.deckId)
      .subscribe(() => {
          this.decks = this.decks.filter(item => item.deckId !== deck.deckId);
        },
        error => this.logger.error('Deleting the deck wasn\'t successful.'));
  }

  onCourseRatingClick = (course: CourseLink, event: IStarRatingOnClickEvent) => {
    const courseRating: Rating = new Rating(event.rating);
    this.courseService.addCourseRating(courseRating, course.courseId).subscribe(() => {
      course.rating = event.rating;
    }, (error) => {
      this.userStatusChangeService.handleUserStatusError(error.status);
    });
  }

  onDeckRatingClick = (deck: DeckPublic, event: IStarRatingOnClickEvent) => {
    const deckRating: Rating = new Rating(event.rating);
    this.deckService.addDeckRating(deckRating, deck.deckId).subscribe(() => {
      deck.rating = event.rating;
    }, (error) => {
      this.userStatusChangeService.handleUserStatusError(error.status);
    });
  }

  getNumberOfCardsThatNeedRepeating(deckId: number): number {
    for (const value of this.numbersOfCardsThatNeedRepeating) {
      if (value.deckId === deckId) {
        return value.numberOfCardsThatNeedRepeating;
      }
    }
  }
}
