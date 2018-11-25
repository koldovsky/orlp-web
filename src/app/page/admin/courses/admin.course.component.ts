import {Component, OnInit} from '@angular/core';
import {CoursePublic} from '../../../dto/CourseDTO/public.course.DTO';
import {AdminCourseService} from './admin.course.service';
import {UserCoursesService} from '../../user/courses/user.courses.service';
import {TableColumnDTO} from '../../../dto/TableColumnDTO';
import {Link} from '../../../dto/link';
import {MainComponent} from '../../main/main.component';
import {ORLPService} from '../../../services/orlp.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ImageDTO} from '../../../dto/ImageDTO/ImageDTO';
import {EditCourseDTO} from '../../../dto/CourseDTO/editCourseDTO';
import {environment} from '../../../../environments/environment';

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
    , new TableColumnDTO('description', 'Course Description', ''), new TableColumnDTO('coursePrice.price', 'Price', '')];
  selectedSortedParam: TableColumnDTO = this.courseColumns[0];
  courseForm: FormGroup;
  courseDescription: String;
  courseName: String;
  courseImage: String;
  courseImageDto: ImageDTO;
  coursePrice: number;
  courseId: String;
  courseSelfLink: Link;
  errorImageFile: boolean;
  newImage: ImageDTO;
  public userImages: ImageDTO[];
  imageId: String;
  courseUpdated: boolean;
  SERVER_ADDRESS: 'https://api.infolve.com/';


  constructor(private adminCourseService: AdminCourseService,
              private userCoursesService: UserCoursesService,
              private mainComponent: MainComponent,
              private formBuilder: FormBuilder,
              private orlpService: ORLPService) {
  }

  ngOnInit(): void {
    this.getCoursesByPage(this.currentPage);
    this.isAuthorizedAdmin = this.mainComponent.isAuthorizedAdmin;
    const nameValidators = [Validators.required, Validators.minLength(2),
      Validators.maxLength(50)];
    const descriptionValidators = [Validators.required, Validators.minLength(10),
      Validators.maxLength(100)];
    this.courseForm = this.formBuilder.group({
      name: ['', nameValidators],
      description: ['', descriptionValidators],
      price: ['', [Validators.pattern(new RegExp(/^[0-9]+$/))
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
    this.courseName = course.name;
    this.courseDescription = course.description;
    this.courseId = course.courseId;
    this.courseImage = course.image;
    this.coursePrice = course.coursePrice;
    this.courseSelfLink = course.self;
    this.imageId = course.image;
    this.imageId = this.imageId.replace(this.SERVER_ADDRESS + 'api/service/image/', '');
    this.getImageById(this.imageId);
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
    this.imageId = image.self.href;
    this.imageId = this.imageId.replace(this.SERVER_ADDRESS + 'api/service/image/', '');
    this.newImage.id = +this.imageId;
  }

  getImageById(id: String) {
    this.adminCourseService.getImageById(id).subscribe(image => {
      this.courseImageDto = image;
      this.courseImageDto.id = +id;
    });
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
    if (this.newImage === undefined || this.newImage == null) {
      this.newImage = this.courseImageDto;
    }
    this.adminCourseService.updateCourse(this.courseId,
      new EditCourseDTO(this.courseDescription, this.courseName, this.newImage, this.coursePrice, this.courseSelfLink)).subscribe(() => {
      this.getCoursesByPage(this.currentPage);
      this.clearFields();
      this.courseUpdated = true;
    });
  }

  clearFields() {
    this.courseName = '';
    this.courseDescription = '';
    this.courseId = '';
    this.courseImage = '';
    this.newImage = null;
    this.coursePrice = 0;
    this.courseSelfLink = null;
  }

  changeCourseUpdated() {
    this.courseUpdated = false;
  }
}
