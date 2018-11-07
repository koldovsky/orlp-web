import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {HomeService} from './home.service';
import {ORLPService} from '../../services/orlp.service';
import {Link} from '../../dto/link';
import {CategoryTop} from '../../dto/CategoryDTO/top.category.DTO';
import {LogoutService} from '../logout/logout.service';
import {IStarRatingOnClickEvent} from 'angular-star-rating';
import {Rating} from '../../dto/Rating';
import {CourseService} from '../categoryInfo/course/course.service';
import {AuthorizationService} from '../authorization/authorization.service';
import {UserStatusChangeService} from '../userStatusChange/user.status.change.service';
import {CourseLink} from '../../dto/CourseDTO/link.course.DTO';
import {CourseLinkWithStatus} from '../../dto/CourseDTO/linkByUserWithStatus.course.DTO';
import {ContuctUsEmail} from '../../dto/ContuctUsEmail';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export const SUBSCRIBE = 'SUBSCRIBE';
export const UNSUBSCRIBE = 'UNSUBSCRIBE';
@Component({
  templateUrl: ('./home.component.html'),
  styleUrls: ['./home.css']
})

export class HomeComponent implements OnInit {
  @ViewChild('categoriesContainer') categoriesContainer: ElementRef;
  @ViewChild('coursesContainer') coursesContainer: ElementRef;
  public categories: CategoryTop[][] = [];
  public courses: CourseLink[] = [];
  public status: string;
  errorMessage: string;
  isAuthorized: boolean;
  public subscriptionButtonText: string[] = [];
  coursesWithStatus: CourseLinkWithStatus[] = [];
  private coursesIdOfTheUser: number[] = [];
  contactUsForm: FormGroup;
  contactForm: ContuctUsEmail;
  emailSent: boolean;
  emailNotSent: boolean;

  constructor(private mainService: HomeService,
              private orlp: ORLPService,
              private logoutService: LogoutService,
              private courseService: CourseService,
              private authorizationService: AuthorizationService,
              private ngZone: NgZone,
              private userStatusChangeService: UserStatusChangeService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    window.onscroll = ( () => this.scrollFunction());
    this.isAuthorized = this.logoutService.isAuthorized();
    this.status = sessionStorage.getItem('status');
    this.mainService.getCategories()
      .subscribe(categories => this.setSlider(this.categories, categories),
        error => this.errorMessage = <any>error);
    this.mainService.getCourses()
      .subscribe(courses => {
          this.courses = courses;
          this.setDefaultTextForButtonSubscribe();
          if (this.isAuthorized) {
              this.getCoursesIdOfTheUser();
          }
        },
        error => this.errorMessage = <any>error);
    this.authorizationService.getIsAuthorizedChangeEmitter()
      .subscribe(item => this.ngZone.run(() => {
        this.isAuthorized = item;
        this.status = sessionStorage.getItem('status');
      }));
    const inputValidator = [Validators.required, Validators.minLength(2),
      Validators.maxLength(50), Validators.pattern('[^`~!@$%^*()\\-_=\\[\\]{};:\'\\".>/?,<\\|0-9]*')];
    const emailValidator = [Validators.required, Validators.minLength(10),
      Validators.maxLength(200), Validators.pattern(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))];
    const textValidator = [Validators.required, Validators.minLength(10), Validators.maxLength(500)];
    this.contactUsForm = this.fb.group({
      'name' : [null, inputValidator],
      'email' : [null, emailValidator],
      'subject' : [null, inputValidator],
      'text' : [null, textValidator]
    });
  }

  setSlider(array: any, categories: any) {
    const length = categories.length;
    for (let i = 0; i < length - 2; i++) {
      array[i] = categories.slice(i, i + 3);
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

  onCourseRatingClick = (course: CourseLink, event: IStarRatingOnClickEvent) => {
    const courseRating: Rating = new Rating(event.rating);
    this.courseService.addCourseRating(courseRating, course.courseId).subscribe(() => {
      course.rating = event.rating;
    }, (error) => {
      this.userStatusChangeService.handleUserStatusError(error.status);
    });
  }

  scrollDown() {
    if (window.pageYOffset < this.categoriesContainer.nativeElement.offsetTop) {
      window.scrollTo({left: 0, top: this.categoriesContainer.nativeElement.offsetTop, behavior: 'smooth'});
    } else {
      window.scrollTo({left: 0, top: this.coursesContainer.nativeElement.offsetTop, behavior: 'smooth'});
    }
  }

  scrollTop() {
    window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
  }

  scrollFunction() {
    if (document.getElementById('courses') != null) {
      if ((window.pageYOffset >= this.coursesContainer.nativeElement.offsetTop)) {
        document.getElementById('arrow').style.display = 'none';
      } else {
        document.getElementById('arrow').style.display = 'block';
      }
    }
  }

  getCoursesIdOfTheUser() {
    this.courseService.getCoursesIdOfTheUser().subscribe(
      id => {
        this.coursesIdOfTheUser = id;
        for (const courseId of id) {
          this.subscriptionButtonText[courseId] = UNSUBSCRIBE;
        }
        this.createCoursesWithStatus();
      });
  }
  createCoursesWithStatus() {
    this.coursesWithStatus = [];
    for (const course of this.courses) {
      this.coursesWithStatus.push(new CourseLinkWithStatus(
        course.name,
        course.description,
        course.image,
        course.self,
        course.decks,
        course.courseId,
        false,
        course.rating
      ));
    }
    this.setStatusForCoursesOfTheUser();
  }
  setStatusForCoursesOfTheUser() {
    for (const course of this.coursesWithStatus) {
      for (const id of this.coursesIdOfTheUser) {
        if (course.courseId === id) {
          course.status = true;
          break;
        }
      }
    }
  }

  addCourseToUser(course: CourseLink) {
    this.courseService.addCourseToUser(course.courseId).subscribe(
      () => this.changeCourseStatus(course.courseId),
      (error) => console.error(error)
    );
  }

  changeCourseStatus(courseId: number) {
    for (const course of this.coursesWithStatus) {
      if (course.courseId === courseId) {
        course.status = !course.status;
        if (course.status) {
          this.subscriptionButtonText[course.courseId] = UNSUBSCRIBE;
        } else {
          this.subscriptionButtonText[course.courseId] = SUBSCRIBE;
        }
      }
    }
  }
  setDefaultTextForButtonSubscribe() {
    for (const course of this.courses) {
        this.subscriptionButtonText[course.courseId] = SUBSCRIBE;
    }
  }
  sendEmailMessage(form: any) {
    this.contactForm = new ContuctUsEmail(form.name, form.email, form.subject, form.text);
    this.mainService.sendEmailMessage(form).subscribe(response => {
      if (response.ok) {
        this.emailSent = true;
        this.contactUsForm.reset();
      }else {
        this.emailNotSent = true;
      }
    });
  }
}
