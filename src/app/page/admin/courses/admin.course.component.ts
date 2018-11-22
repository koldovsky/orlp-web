import {Component, OnInit} from '@angular/core';
import {CoursePublic} from '../../../dto/CourseDTO/public.course.DTO';
import {AdminCourseService} from './admin.course.service';
import {UserCategoriesService} from '../../user/categories/user.categories.service';
import {UserCoursesService} from '../../user/courses/user.courses.service';
import {TableColumnDTO} from '../../../dto/TableColumnDTO';
import {Link} from '../../../dto/link';
import {MainComponent} from '../../main/main.component';
import {ORLPService} from '../../../services/orlp.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ImageDTO} from '../../../dto/ImageDTO/ImageDTO';
import {EditCategoryDTO} from '../../../dto/CategoryDTO/editCategoryDTO';
import {EditCourseDTO} from '../../../dto/CourseDTO/editCourseDTO';
import {$} from 'protractor';

@Component({
  selector: 'app-courses',
  templateUrl: './admin.course.component.html',
  styleUrls: ['./admin.course.component.css']
})
export class AdminCourseComponent implements OnInit {

  courses: CoursePublic[];
  courseSelected: CoursePublic;
  public isAuthorizedAdmin: boolean;
  actionSort = true;
  currentPage = 1;
  lastPage: number;
  courseColumns: TableColumnDTO[] = [new TableColumnDTO('id', '#', '\u2191'), new TableColumnDTO('name', 'Course Name', '')
    , new TableColumnDTO('description', 'Course Description', ''), new TableColumnDTO('coursePrice.price', 'Course price', '')];
  selectedSortedParam: TableColumnDTO = this.courseColumns[0];
  courseForm: FormGroup;
  courseDescription: String;
  courseName: String;
  courseImage: String;
  coursePrice: number;
  courseId: String;
  courseSelfLink: Link;
  errorImageFile: boolean;
  newImage: ImageDTO;
  public userImages: ImageDTO[];
  createdCourseMessage: String;


  constructor(private adminCourseService: AdminCourseService,
              private userCoursesService: UserCoursesService,
              private mainComponent: MainComponent,
              private formBuilder: FormBuilder,
              private orlpService: ORLPService) {
  }

  ngOnInit(): void {
    this.getCoursesByPage(this.currentPage);
    // this.isAuthenticated = this.mainComponent.isAuthenticated;
    this.isAuthorizedAdmin = this.mainComponent.isAuthorizedAdmin;
    const nameValidators = [Validators.required, Validators.minLength(2),
      Validators.maxLength(30), Validators.pattern('[^`~!@$%^*()\\-_=\\[\\]{};:\'\\".>/?,<\\|0-9]*')];
    const descriptionValidators = [Validators.required, Validators.minLength(10),
      Validators.maxLength(50), Validators.pattern('[^`~!@$%^*()\\-_=\\[\\]{};:\'\\">/?<\\|0-9]*')];
    this.courseForm = this.formBuilder.group({
      name: ['', nameValidators],
      description: ['', descriptionValidators],
      price: ['', [Validators.pattern(new RegExp(/^[0-9]+$/))
        // , Validators.pattern(new RegExp(/^[0-9]{0,6}+$/))
      ]]
    });
  }

  getCourseLink(link: Link): string {
    return this.orlpService.getShortLink(link);
  }

  public getCoursesByPage(numberPage: number) {
    this.userCoursesService.getCoursesByPage(numberPage, this.selectedSortedParam.nameColumnParam, this.actionSort)
      .subscribe(courses => {
        this.currentPage = numberPage;
        this.lastPage = courses.totalPages;
        this.courses = courses.courses;
      });
  }

  public sortBy(param: TableColumnDTO) {
    if (param === this.selectedSortedParam) {
      this.actionSort = !this.actionSort;
    } else {
      this.actionSort = true;
      this.selectedSortedParam.symbolSorting = '';
    }
    if (this.actionSort) {
      param.symbolSorting = '\u2191';
    } else {
      param.symbolSorting = '\u2193';
    }

    this.selectedSortedParam = param;
    this.getCoursesByPage(this.currentPage);
  }

  assignCourse(course: CoursePublic): void {
    this.courseSelected = course;
  }

  deleteCourse(course: CoursePublic): void {
    this.userCoursesService.deleteCourse(course.self)
      .subscribe(() => {
        this.getCoursesByPage(this.currentPage);
      });
  }

  beforeEditing(course: CoursePublic) {
    this.clearFields();
    this.courseName = course.name;
    this.courseDescription = course.description;
    this.courseId = course.courseId;
    this.courseImage = course.image;
    this.coursePrice = course.coursePrice;
    this.courseSelfLink = course.self;
  }

  getUserImages() {
    this.errorImageFile = false;
    this.adminCourseService.getUserImages().subscribe(userImages => {
        this.userImages = userImages;
      }
    );
  }

  getNewImage(image: ImageDTO) {
    this.newImage = image;
  }

  loadFile(fileInput: any) {
    const file = fileInput.target.files[0];
    if (file != null) {
      const formData = new FormData();
      formData.append('file', file);
      this.adminCourseService.addImage(formData)
        .subscribe(() => {
          this.getUserImages();
        }, () => {
          this.errorImageFile = true;
        });
    }
    this.errorImageFile = false;
  }

  deleteImage(image: ImageDTO) {
    this.adminCourseService.deleteImage(image.self.href)
      .subscribe(() => this.getUserImages());
  }

  editCourse() {
    this.adminCourseService.updateCourse(this.courseId,
      new EditCourseDTO(this.courseDescription, this.courseName, this.newImage, this.coursePrice, this.courseSelfLink)).subscribe(() => {
      this.createdCourseMessage = 'Course "' + this.courseName + '" edited!';
      this.getCoursesByPage(this.currentPage);
      this.clearFields();

    });
  }

  clearFields() {
    // this.courseForm.reset();
    this.courseName = '';
    this.courseDescription = '';
    this.courseId = '';
    this.courseImage = '';
    this.newImage = null;
    this.coursePrice = null;
    this.courseSelfLink = null;
  }
}
