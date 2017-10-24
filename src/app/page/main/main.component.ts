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
import {AuthorizationService} from "../authorization/authorization.service";

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
  public isAuthorized: boolean;
  public isAuthenticated: boolean;
  public isAuthorizedAdmin: boolean;
  public userDetails: UserDetailsDto;
  public showSearchResult: boolean;
  public image: string;

  constructor(private categoryService: CategoryService,
              private courseService: CourseService,
              private deckService: DeckService,
              private logoutService: LogoutService,
              private router: Router,
              private mainService: MainService,
              private adminGuard: AdminGuardService,
              private authorizationService: AuthorizationService,
              private ngZone: NgZone) {
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
        }
      }));
  }


  getRole(): void {
    this.mainService.getUserDetails()
      .subscribe(user => this.ngZone.run(() => {
        this.userDetails = user;
        this.isAuthorized = user.accountStatus === 'ACTIVE';
        this.isAuthorizedAdmin = user.authorities.includes('ROLE_ADMIN');
        this.setAdmin();
        if (user.imageType === 'BASE64') {
          this.image = user.self.href + '/image' + '?' + new Date().getTime();
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
      this.authorizationService.emitIsAuthorizedChangeEvent(false);
      this.router.navigate(['home']);
    }
  }

  setAdmin(): void {
    this.adminGuard.isAdmin = this.isAuthorizedAdmin;
  }
}
