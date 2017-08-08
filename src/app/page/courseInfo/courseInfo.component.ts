import {Component, OnInit} from "@angular/core";
import {CourseInfoService} from "./courseInfo.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {ORLPService} from "../../services/orlp.service";
import {DeckPublic} from "../../dto/DeckDTO/public.deck.DTO";
import {CourseLink} from "../../dto/CourseDTO/link.course.DTO";
import {LogoutService} from "../logout/logout.service";
@Component({
  templateUrl: ('./courseInfo.component.html'),
  styleUrls: ['./courseInfo.css']

})
export class CourseInfoComponent implements OnInit {
  private url: string;
  private decks: DeckPublic[];
  private course: CourseLink;
  private sub: Subscription;
  private errorMessage: string;
  public addCourseToUserButton: string;
  private userOwnCourse: boolean;

  constructor(private route: ActivatedRoute,
              private orlp: ORLPService,
              private courseService: CourseInfoService,
              private logoutService: LogoutService) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        this.url = params['url'];
      }
    );
    this.takeCourse();
    this.buttonManege();
  }

  takeCourse() {
    this.decodeLink();
    this.courseService.getCourse(this.url).subscribe(
      course => {
        this.course = course;
        this.takeDecks(course);
      },
      error => this.errorMessage = <any>error
    );
  }

  private takeDecks(course: CourseLink) {
    this.courseService.getDecks(course).subscribe(
      decks => {
        this.decks = decks;
      },
      error => {
        this.errorMessage = <any>error;
      },
    );
  }

  addCourseToUser() {
    this.courseService.addCourseToUser(this.geIdOfTheCourseFromUrl())
      .subscribe(response => console.log(response));
  }

  private decodeLink() {
    this.url = this.orlp.decodeLink(this.url);
  }

  isAuthorized(): boolean {
    return this.logoutService.isAuthorized();
  }

  buttonManege() {
    if (this.isAuthorized()) {
      this.addCourseToUserButton = 'addCourseToUserButtonActive';
    } else {
      this.addCourseToUserButton = 'addCourseToUserButtonInActive';
    }
  }

  geIdOfTheCourseFromUrl(): number {
    const courseId = Number(this.url.charAt(this.url.length - 1));
    console.log(courseId);
    return courseId;
  }
}
