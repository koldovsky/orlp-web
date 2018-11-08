import {Component, NgZone, OnInit} from '@angular/core';
import {DeckPublic} from '../../dto/DeckDTO/public.deck.DTO';
import {DeckService} from './search/deck.service';
import {LogoutService} from '../logout/logout.service';
import {Router} from '@angular/router';
import {MainService} from './main.service';
import {UserDetailsDto} from '../../dto/UserDetailsDto';
import {CourseService} from './search/course.service';
import {CategoriesPublic} from '../../dto/CategoryDTO/public.categories';
import {CategoryService} from './search/category.service';
import {AdminGuardService} from '../admin/admin.main.guard.service';
import {CourseLink} from '../../dto/CourseDTO/link.course.DTO';
import {AuthorizationService} from '../authorization/authorization.service';
import {SearchService} from '../search/search.service';
import {SearchComponent} from '../search/search.component';
import {SearchResults} from '../../dto/SearchDTO/search.results.DTO';

@Component({
  selector: 'app-page',
  templateUrl: ('./main.component.html'),
  styleUrls: ['./main.css', './dropdown.css']
})

export class MainComponent implements OnInit {
  public categories: CategoriesPublic[];
  public courses: CourseLink[];
  public decks: DeckPublic[];
  public listFilter: string;
  public isAuthorized:
    boolean;
  public isAuthenticated: boolean;
  public isAuthorizedAdmin: boolean;
  public userDetails: UserDetailsDto;
  public showSearchResult: boolean;
  public image: string;
  public activeLink: string;
  public searchString: string;

  constructor(private categoryService: CategoryService,
              private courseService: CourseService,
              private deckService: DeckService,
              private logoutService: LogoutService,
              private router: Router,
              private mainService: MainService,
              private adminGuard: AdminGuardService,
              private authorizationService: AuthorizationService,
              private ngZone: NgZone,
              private searchService: SearchService,
              private searchComponent: SearchComponent) {
  }

  ngOnInit(): void {
    this.isAuthorized = false;
    this.isAuthorizedAdmin = false;
    this.userDetails = null;
    this.isAuthenticated = this.logoutService.isAuthorized();
    if (this.isAuthenticated) {
      this.getRole();
    }
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
    this.courseService.getCourses().subscribe(courses => this.courses = courses);
    this.deckService.getDecks().subscribe(decks => this.decks = decks);
    this.authorizationService.getIsAuthorizedChangeEmitter()
      .subscribe(item => this.ngZone.run(() => {
        this.isAuthenticated = item;
        if (this.isAuthenticated) {
          this.getRole();
        } else {
          this.isAuthorized = false;
          this.isAuthorizedAdmin = false;
          this.userDetails = null;
          this.isAuthenticated = false;
        }
      }));
  }


  getRole(): void {
    this.mainService.getUserDetails()
      .subscribe(user => this.ngZone.run(() => {
        this.userDetails = user;
        this.isAuthorized = (!user.deactivated && (user.accountStatus === 'ACTIVE' || user.accountStatus === 'BLOCKED'));
        this.isAuthorizedAdmin = user.authorities.includes('ROLE_ADMIN');
        this.setAdmin();
        if (user.imageType === 'BASE64') {
          this.image = user.imageBase64;
        } else if (user.imageType === 'LINK') {
          this.image = user.image;
        } else {
          this.image = null;
        }
      }));
  }

  logoutUser() {
    if (this.logoutService.logout()) {
      this.isAuthorized = false;
      this.isAuthorizedAdmin = false;
      this.userDetails = null;
      this.isAuthenticated = false;
      this.authorizationService.emitIsAuthorizedChangeEvent(false);
      this.router.navigate(['home']);
    }
  }

  setAdmin(): void {
    this.adminGuard.isAdmin = this.isAuthorizedAdmin;
  }
  setActiveLink(link: string): void {
    this.activeLink = link;
  }
  setNotActive(): void {
    this.activeLink = '';
  }
  onSearchClick(): void {
    this.searchService.getResults(this.searchString);
  }
}
