import { PipeTransform } from "@angular/core";
import { ICategoryForAdmin } from "../../interfaces/category-for-admin";
export declare class CategoryFilterPipe implements PipeTransform {
    transform(value: ICategoryForAdmin[], filterBy: string): ICategoryForAdmin[];
}
