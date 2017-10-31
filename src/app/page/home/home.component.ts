import {Component, NgZone, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {ORLPService} from '../../services/orlp.service';
import {Link} from '../../dto/link';
import {CategoryTop} from '../../dto/CategoryDTO/top.category.DTO';
import {CourseTop} from '../../dto/CourseDTO/top.course.DTO';
import {LogoutService} from "../logout/logout.service";
import {IStarRatingOnClickEvent} from "angular-star-rating";
import {Rating} from "../../dto/Rating";
import {CourseService} from "../categoryInfo/course/course.service";
import "../../../assets/down.js"
import {AuthorizationService} from "../authorization/authorization.service";
import * as ORLPSettings from '../../services/orlp.settings';
import {Router} from "@angular/router";

declare const myDown: any;
declare const myTop: any;

@Component({
  templateUrl: ('./home.component.html'),
  styleUrls: ['./home.css']
})

export class HomeComponent implements OnInit {
  public categories: CategoryTop[][]=[];
  public courses: CourseTop[]=[];
  public status: string;
  errorMessage: string;

  constructor(private mainService: HomeService,
              private orlp: ORLPService,
              private  logoutService: LogoutService,
              private courseService: CourseService,
              private authorizationService: AuthorizationService,
              private router: Router,
              private ngZone: NgZone) {
  }

  ngOnInit(): void {
    myDown();
    myTop();
    this.logoutService.isAuthorized();
    this.status = sessionStorage.getItem('status');
    console.log('sessionStorageghjh');
    console.log(sessionStorage.getItem('status'));
    this.mainService.getCategories()
      .subscribe(categories => this.setSlider(this.categories, categories),
        error => this.errorMessage = <any>error);
    this.mainService.getCourses()
      .subscribe(courses =>
        this.courses = courses,
        error => this.errorMessage = <any>error);
    this.authorizationService.getIsAuthorizedChangeEmitter()
      .subscribe(item => this.ngZone.run(() => {
        this.logoutService.isAuthorized();
        this.status = sessionStorage.getItem('status');
        console.log('sessionStorageghjh');
        console.log(sessionStorage.getItem('status'));
      }));
   console.log('sessionStorageghjh');
    console.log(sessionStorage.getItem('status'));
  }

  setSlider(array: any, categories: any){
    const length = categories.length;
    for(var i=0; i < length - 2; i++){
      array[i] = categories.slice(i, i + 3)
    }
    array[length - 2] = categories.slice(length - 2, length);
    array[length - 2][2] = categories[0];
    array[length - 1] = new Array();
    array[length - 1][0] = categories[length - 1];
    array[length - 1][1] = categories[0];
    array[length - 1][2] = categories[1];
  }

  getCategoryLink(link: Link): string {
    return this.orlp.getShortLink(link);
  }

  getCourseLink(link: Link): string {
    return this.orlp.getShortLink(link);
  }

  onCourseRatingClick = (course: CourseTop, event: IStarRatingOnClickEvent) => {
    const courseRating: Rating = new Rating( event.rating);
    this.courseService.addCourseRating(courseRating, course.courseId).subscribe(() => {
      course.rating = event.rating; }, (error) => {
      this.statusError(error);

    });
  }

  private statusError(response) {

    if (response.status === ORLPSettings.LOCKED) {
      sessionStorage.setItem('status', 'DELETED');
      this.router.navigate(['user/status/change']);
    } else if (response.status === ORLPSettings.FORBIDDEN) {
      sessionStorage.setItem('status', 'BLOCKED');
      this.router.navigate(['user/status/change']);
    }
  }
}
