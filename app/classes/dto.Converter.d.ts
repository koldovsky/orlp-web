import { CategoryTop } from "./top.category.DTO";
import { Link } from "./link";
import { CategoryLink } from "./link.category.DTO";
import { DeckPublic } from "./public.deck.DTO";
import { CoursePublic } from "./public.course.DTO";
import { CategoriesPublic } from "./public.categories";
import { CourseTop } from "./top.course.DTO";
import { UsersPublic } from "./public.users.DTO";
export declare class DTOConverter {
    static jsonToPublicCourse(data: any): CoursePublic;
    static jsonToPublicDeck(data: any): DeckPublic;
    static jsonToTopCategory(data: any): CategoryTop;
    static jsonToTopCourse(data: any): CourseTop;
    static jsonToPublicCategories(data: any): CategoriesPublic;
    static jsonToPublicCategory(data: any): CategoryLink;
    static jsonToPublicUsers(data: any): UsersPublic;
    static jsonToLink(rel: string, data: any): Link;
    static jsonArrayToCollection(callback: Function, data: Array<any>): Array<any>;
}
