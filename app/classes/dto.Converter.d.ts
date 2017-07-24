import { CategoryTop } from "./CategoryDTO/top.category.DTO";
import { Link } from "./link";
import { CategoryLink } from "./CategoryDTO/link.category.DTO";
import { DeckPublic } from "./DeckDTO/public.deck.DTO";
import { CoursePublic } from "./CourseDTO/public.course.DTO";
import { CategoriesPublic } from "./CategoryDTO/public.categories";
import { CourseTop } from "./CourseDTO/top.course.DTO";
import { UsersPublic } from "./public.users.DTO";
import { DeckLinkByCategory } from "./DeckDTO/linkByCategory.deck.DTO";
import { CardPublic } from "./CardsDTO/public.card.DTO";
export declare class DTOConverter {
    static jsonToPublicCards(data: any): CardPublic;
    static jsonToPublicCourse(data: any): CoursePublic;
    static jsonToPublicDeck(data: any): DeckPublic;
    static jsonToDeckLinkByCategory(data: any): DeckLinkByCategory;
    static jsonToTopCategory(data: any): CategoryTop;
    static jsonToTopCourse(data: any): CourseTop;
    static jsonToPublicCategories(data: any): CategoriesPublic;
    static jsonToPublicCategory(data: any): CategoryLink;
    static jsonToPublicUsers(data: any): UsersPublic;
    static jsonToLink(rel: string, data: any): Link;
    static jsonArrayToCollection(callback: Function, data: Array<any>): Array<any>;
}
