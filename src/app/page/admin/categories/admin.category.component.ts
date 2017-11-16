import {Component, OnInit} from '@angular/core';
import {AdminCategoryService} from './admin.category.service';
import {CategoriesPublic} from '../../../dto/CategoryDTO/public.categories';
import {ImageDTO} from '../../../dto/ImageDTO/ImageDTO';
import {CreateCategoryDTO} from '../../../dto/CategoryDTO/createCategoryDTO';

@Component({
  providers: [AdminCategoryService],
  templateUrl: ('./admin.category.component.html'),
  styleUrls: ['./admin.category.style.css']
})

export class AdminCategoryComponent implements OnInit {
  public categories: CategoriesPublic[];
  public listFilter: string;
  public category: CategoriesPublic;
  public categoryName: string;
  public categoryDescription: string;
  public userImages: ImageDTO[];
  public chosenImage: ImageDTO;
  public createCategoryMessage: string;

  constructor(private adminCategoryService: AdminCategoryService) {
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  createCategory() {
    this.adminCategoryService.createCategory(new CreateCategoryDTO(this.categoryName, this.categoryDescription, this.chosenImage)).subscribe(() => {
      this.createCategoryMessage = 'Category created!';
      this.getAllCategories();
    }, () => this.createCategoryMessage = 'Error. Please try again!');
  }

  loadFile(fileInput: any) {
    const file = fileInput.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    this.adminCategoryService.addImage(formData)
      .subscribe(() => this.getUserImages());
  }

  getUserImages() {
    this.adminCategoryService.getUserImages().subscribe(userImages => {
        this.userImages = userImages;
      }
    );
  }

  getAllCategories() {
    this.adminCategoryService.getCatalogs().subscribe(categories => this.categories = categories);
  }

  getChosenImage(image: ImageDTO) {
    console.log(image.isImageUsed);
    this.chosenImage = image;
  }

  deleteImage(image: ImageDTO) {
    this.adminCategoryService.deleteImage(image.id)
      .subscribe(() => this.getUserImages());
  }

  beforeCreate() {
    this.categoryName = '';
    this.categoryDescription = '';
    this.chosenImage = null;
  }
}
