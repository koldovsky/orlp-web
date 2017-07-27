import { PipeTransform } from "@angular/core";
import { CategoriesPublic } from "../../../classes/CategoryDTO/public.categories";
export declare class AdminCategoryPipe implements PipeTransform {
    transform(value: CategoriesPublic[], filterBy: string): CategoriesPublic[];
}
