import {Component, OnInit} from '@angular/core';
import {CourseService} from './course.service';
import {ImageDTO} from '../../../dto/ImageDTO/ImageDTO';
import {CategoryLink} from '../../../dto/CategoryDTO/link.category.DTO';
import {PrivateCourseDTO} from '../../../dto/CourseDTO/private.course.DTO';
import {Router} from '@angular/router';

@Component({
  templateUrl: ('./course.component.html'),
  styleUrls: ['./course.css']
})

export class CourseComponent implements OnInit {
  public categories: CategoryLink[];
  public chosenCategoryId: number;
  public userImages: ImageDTO[];
  public chosenImage: ImageDTO;
  public courseName: string;
  public courseDescription: string;

  constructor(private courseService: CourseService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.getUserImages();
  }

  getCategories() {
    this.courseService.getCategories().subscribe(categories => {
        this.categories = categories;
      }
    );
  }

  getUserImages() {
    this.courseService.getUserImages().subscribe(userImages => {
        this.userImages = userImages;
      }
    );
  }

  onCategorySelect(deviceValue) {
    this.chosenCategoryId = deviceValue.value;
  }

  loadFile(fileInput: any) {
    const file = fileInput.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    this.courseService.addImage(formData)
      .subscribe(() => this.getUserImages());
  }

  getChosenImage(image: ImageDTO) {
    this.chosenImage = image;
  }

  createCourse() {
    this.courseService.createCourse(
      new PrivateCourseDTO(this.courseName, this.courseDescription, this.chosenImage), this.chosenCategoryId)
      .subscribe(() => this.router.navigate(['/user/cabinet']));
  }

  deleteImage(image: ImageDTO) {
    this.courseService.deleteImage(image.id)
      .subscribe(() => this.getUserImages());
  }
}
