import {CategoriesPublic} from './public.categories';

export class CategoriesByPageDTO {
  public categories: CategoriesPublic[];
  public totalPages: number;

  constructor(categories: CategoriesPublic[], totalPages: number) {
    this.categories = categories;
    this.totalPages = totalPages;
  }
}
