import { PipeTransform } from "@angular/core";
import { ICategory } from "../../../interfaces/category";
export declare class AdminCategoryPipe implements PipeTransform {
    transform(value: ICategory[], filterBy: string): ICategory[];
}
