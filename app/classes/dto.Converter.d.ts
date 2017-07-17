import { CategoryTop } from "./top.category.DTO";
import { Link } from "./link";
import { CategoryLink } from "./link.category.DTO";
import { DeckPublic } from "./public.deck.DTO";
import { CoursePublic } from "./public.course.DTO";
import { CategoriesPublic } from "./public.categories";
export declare class DTOConverter {
    static jsonToPublicCourse(data: any): CoursePublic;
    static jsonToPublicDeck(data: any): DeckPublic;
    static jsonToTopCategory(data: any): CategoryTop;
    static jsonToPublicCategories(data: any): CategoriesPublic;
    static jsonToPublicCategory(data: any): CategoryLink;
    static jsonToLink(rel: string, data: any): Link;
    static jsonArrayToCollection(callback: Function, data: Array<any>): Array<any>;
}
