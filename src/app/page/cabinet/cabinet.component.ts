import {Component, OnInit} from '@angular/core';
import {CabinetService} from './cabinet.service';
import {UsersDTO} from '../../dto/UsersDTO/UserDTO';
import {Link} from '../../dto/link';
import {Router} from '@angular/router';
import {CourseLink} from '../../dto/CourseDTO/link.course.DTO';
import {DeckLinkByCategory} from '../../dto/DeckDTO/linkByCategory.deck.DTO';
import {CardComponent} from "../card/card.component";

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
  public showFolderDecks: any;
  public chosenCourse: CourseLink;

  constructor(private cabinetService: CabinetService,
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
          this.getDecks(this.user.folder);
        }
      );
  }

  getUserCourses(user: UsersDTO): void {
    this.cabinetService.getCourses(user.courses)
      .subscribe(courses => {
        this.courses = courses;
      });
  }

  getDecks(link: Link): void {
    this.cabinetService.getDecks(link)
      .subscribe(decks => this.decks = decks);
  }

  startLearning(deckId: number): void {
    this.router.navigate(['/cards', '/api/category/decks/' + deckId + '/learn/cards']);
    CardComponent.deckId = deckId;
  }

  getFolderDecks() {
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
    this.chosenCourse = course;
    this.cabinetService.getCategoryDecks(course.categoryId)
      .subscribe((decks) => {
        this.categoryDecks = decks;
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
}
