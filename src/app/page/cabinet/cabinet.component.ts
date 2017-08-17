import {Component, OnInit} from '@angular/core';
import {CabinetService} from './cabinet.service';
import {UsersDTO} from '../../dto/UsersDTO/UserDTO';
import {Link} from '../../dto/link';
import {ORLPService} from '../../services/orlp.service';
import {Router} from '@angular/router';
import {DeckDTO} from '../../dto/DeckDTO/DeckDTO';
import {CourseLink} from '../../dto/CourseDTO/link.course.DTO';

@Component({
  providers: [CabinetService],
  templateUrl: ('./cabinet.component.html'),
  styleUrls: ['./cabinet.css']
})

export class CabinetComponent implements OnInit {
  public user: UsersDTO;
  public courses: CourseLink[];
  public decks: DeckDTO[];
  private showCourseDecks: any;
  private showFolderDecks: any;

  constructor(private cabinetService: CabinetService,
              private orlpService: ORLPService,
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
        }
      );
  }

  getUserCourses(user: UsersDTO): void {
    this.cabinetService.getCourse(user.courses)
      .subscribe(courses => this.courses = courses);
  }

  getDecks(link: Link): void {
    this.cabinetService.getDecks(link)
      .subscribe(decks => this.decks = decks);
  }

  getCardsLink(link: Link): string {
    return this.orlpService.getShortLink(link);
  }

  startLearning(cards: Link): void {
    this.router.navigate(['/cards', this.getCardsLink(cards)]);
  }

  getFolderDecks() {
    this.getDecks(this.user.folder);
    this.showFolderDecks = !this.showFolderDecks;
    this.showCourseDecks = false;
  }


  getCourseDecks(course: CourseLink) {
    this.getDecks(course.decks);
    this.showFolderDecks = false;
    this.showCourseDecks = (this.showCourseDecks === course.name) ? false : course.name;
  }
}
