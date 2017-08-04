import { PipeTransform } from "@angular/core";
import { ICategory } from "../../../interfaces/category";
export declare class CategoryFilterPipe implements PipeTransform {
    transform(value: ICategory[], filterBy: string): ICategory[];
}
