import {Component, OnInit} from '@angular/core';
import {DeckPublic} from '../../dto/DeckDTO/public.deck.DTO';
import {DeckService} from './search/deck.service';
import {LogoutService} from '../logout/logout.service';
import {Router} from '@angular/router';
import {MainService} from './main.service';
import {UserDetailsDto} from '../../dto/UserDetailsDto';
import {CourseService} from './search/course.service';
import {CourseTop} from '../../dto/CourseDTO/top.course.DTO';
import {CategoriesPublic} from '../../dto/CategoryDTO/public.categories';
import {CategoryService} from './search/category.service';

@Component({
  selector: 'app-page',
  templateUrl: ('./main.component.html'),
  styleUrls: ['./main.css', './dropdown.css']
})

export class MainComponent implements OnInit {
  public categories: CategoriesPublic[];
  public courses: CourseTop[];
  public decks: DeckPublic[];
  public listFilter: string;
  public isAuthorized: boolean;
  public isAuthorizedAdmin: boolean;
  public userDetails: UserDetailsDto;

  constructor(private categoryService: CategoryService,
              private courseService: CourseService,
              private deckService: DeckService,
              private logoutService: LogoutService,
              private router: Router,
              private mainService: MainService) {
  }

  ngOnInit(): void {
    this.isAuthorized = this.logoutService.isAuthorized();
    if (this.isAuthorized) {
      this.mainService.getUserDetails()
        .subscribe(user => {
          this.userDetails = user;
          this.isAuthorizedAdmin = user.authorities.includes('ROLE_ADMIN');
        });
    }
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
    this.courseService.getCourses().subscribe(courses => this.courses = courses);
    this.deckService.getDecks().subscribe(decks => this.decks = decks);
  }

  logoutUser() {
    if (this.logoutService.logout()) {
      this.isAuthorized = false;
      this.isAuthorizedAdmin = false;
      this.router.navigate(['main']);
    }
  }
}
