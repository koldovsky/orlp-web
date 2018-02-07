import {Component, OnInit} from '@angular/core';
import {AdminCategoryService} from './admin.category.service';
import {CategoriesPublic} from '../../../dto/CategoryDTO/public.categories';
import {ImageDTO} from '../../../dto/ImageDTO/ImageDTO';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  public categoryForm: FormGroup;
  public errorImageFile: boolean;


  constructor(private adminCategoryService: AdminCategoryService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    const nameValidators = [Validators.required, Validators.minLength(2),
      Validators.maxLength(15), Validators.pattern('[^`~!@$%^&*()\\-_=\\[\\]{};:\'\\".>/?,<\\|0-9]*')];
    const descriptionValidators = [Validators.required, Validators.minLength(10),
      Validators.maxLength(150), Validators.pattern('[^`~!@$%^&*()\\-_=\\[\\]{};:\'\\">/?<\\|0-9]*')];
    this.categoryForm = this.formBuilder.group({
      name: ['', nameValidators],
      description: ['', descriptionValidators]
    });
    this.getAllCategories();
  }

  createCategory() {
    this.adminCategoryService.createCategory(new CreateCategoryDTO(this.categoryName, this.categoryDescription,
      this.chosenImage)).subscribe(() => {
      this.createCategoryMessage = 'Category "' + this.categoryName + '" created!';
      this.getAllCategories();
    }, () => this.createCategoryMessage = 'Error. Please try again!');
  }

  loadFile(fileInput: any) {
    const file = fileInput.target.files[0];
    if (file != null) {
      const formData = new FormData();
      formData.append('file', file);
      this.adminCategoryService.addImage(formData)
        .subscribe(() => {
          this.getUserImages();
        }, () => {
          this.errorImageFile = true;
        });
    }
    this.errorImageFile = false;
  }

  getUserImages() {
    this.errorImageFile = false;
    this.adminCategoryService.getUserImages().subscribe(userImages => {
        this.userImages = userImages;
      }
    );
  }

  getAllCategories() {
    this.adminCategoryService.getCatalogs().subscribe(categories => this.categories = categories);
  }

  getChosenImage(image: ImageDTO) {
    this.chosenImage = image;
  }

  deleteImage(image: ImageDTO) {
    this.adminCategoryService.deleteImage(image.self.href)
      .subscribe(() => this.getUserImages());
  }

  beforeCreate() {
    this.categoryForm.reset();
    this.categoryName = '';
    this.categoryDescription = '';
    this.chosenImage = null;
  }

  isFormValid(): boolean {
    return this.categoryForm.valid;
  }
}
