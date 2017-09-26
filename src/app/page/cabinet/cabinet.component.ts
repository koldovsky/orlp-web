import {Component, OnInit} from '@angular/core';
import {CabinetService} from './cabinet.service';
import {UsersDTO} from '../../dto/UsersDTO/UserDTO';
import {Link} from '../../dto/link';
import {Router} from '@angular/router';
import {CourseLink} from '../../dto/CourseDTO/link.course.DTO';
import {DeckLinkByCategory} from '../../dto/DeckDTO/linkByCategory.deck.DTO';
import {CardComponent} from "../card/card.component";
import {IStarRatingOnClickEvent} from "angular-star-rating/star-rating-struct";
import {DeckPublic} from "../../dto/DeckDTO/public.deck.DTO";
import {DeckService} from "../categoryInfo/deck/deck.service";
import {CourseService} from "../categoryInfo/course/course.service";
import {Rating} from "../../dto/Rating";

@Component({
  providers: [CabinetService],
  templateUrl: ('./cabinet.component.html'),
  styleUrls: ['./cabinet.css']
})

export class CabinetComponent implements OnInit {
  public user: UsersDTO;
  public courses: CourseLink[];
  public decks: DeckLinkByCategory[];
  public categoryDecks: DeckLinkByCategory[];
  public showCourseDecks: any;
  public showFolderDecks: boolean = true;
  public chosenCourse: CourseLink;
  public showAllertdeck: boolean = true;
  public showAllertcouse: boolean = true;

  constructor(private deckService: DeckService,
              private courseService: CourseService,
              private cabinetService: CabinetService,
              private router: Router) {

  }

  ngOnInit(): void {
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

  getUserCourses(user: UsersDTO): void {
    this.cabinetService.getCourses(user.courses)
      .subscribe(courses => {
        this.courses = courses;
        if (courses.length > 0) {
          this.showAllertcouse = false;
        }
      });

  }

  getDecks(link: Link): void {
    this.cabinetService.getDecks(link)
      .subscribe(decks => {this.decks = decks;
        if (decks.length > 0) {
          this.showAllertdeck = false;
        }
      });
  }

  startLearning(deckId: number): void {
    this.router.navigate(['/cards', '/api/category/decks/' + deckId + '/learn/cards']);
    CardComponent.deckId = deckId;
  }

  toggleFolder() {
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
    if (this.isOwner(course)) {
      this.cabinetService.deleteGlobalCourse(course)
        .subscribe((response) => this.getUserCourses(this.user));
    } else {
      this.cabinetService.deleteLocalCourse(course)
        .subscribe((response) => this.getUserCourses(this.user));
    }
  }

  isOwner(course: CourseLink): boolean {
    return course.ownerId === this.user.id;
  }

  changeAccess(course: CourseLink, access: boolean) {
    course.published = access;

    this.cabinetService.updateCourse(course)
      .subscribe((response) => console.log());
  }

  getCategoryDecks(course: CourseLink) {
    this.getDecks(course.decks);
    this.chosenCourse = course;
    this.cabinetService.getCategoryDecks(course.categoryId)
      .subscribe((decks) => {
        this.categoryDecks = decks.filter(deck => !this.decks.some(deckInCourse => deckInCourse.deckId === deck.deckId));
      });
  }

  addDeckToCourse(deck: DeckLinkByCategory) {
    this.cabinetService.addDeckToCourse(this.chosenCourse.courseId, deck.deckId)
      .subscribe(() => {
        console.log();
      });
  }

  deleteFolderDeck(deck: DeckLinkByCategory) {
    this.cabinetService.deleteDeck(deck.deckId)
      .subscribe(() => {
          this.decks = this.decks.filter(item => item.deckId !== deck.deckId);
        },
        error => console.log("Deleting the deck wasn't successful."));
  }

  onCourseRatingClick = (course: CourseLink, event: IStarRatingOnClickEvent) => {
    const courseRating: Rating = new Rating(course.courseId, event.rating, course.self);
    this.courseService.addCourseRating(courseRating).subscribe(() => course.rating = event.rating);
  }

  onDeckRatingClick = (deck: DeckPublic, event: IStarRatingOnClickEvent) => {
    const deckRating: Rating = new Rating(deck.deckId, event.rating, deck.self);
    this.deckService.addDeckRating(deckRating).subscribe(() => deck.rating = event.rating);
  }
}
