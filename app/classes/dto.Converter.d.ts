import { CategoryTop } from "./CategoryDTO/top.category.DTO";
import { Link } from "./link";
import { CategoryLink } from "./CategoryDTO/link.category.DTO";
import { DeckPublic } from "./DeckDTO/public.deck.DTO";
import { CategoriesPublic } from "./CategoryDTO/public.categories";
import { CourseTop } from "./CourseDTO/top.course.DTO";
import { UsersPublic } from "./public.users.DTO";
import { UsersDTO } from "./UserDTO/UserDTO";
import { CourseLink } from "./CourseDTO/link.course.DTO";
import { UserDetailsDto } from "./UserDetailsDto";
export declare class DTOConverter {
    static jsonToUserDTO(data: any): UsersDTO;
    static jsonToPublicCourse(data: any): CourseLink;
    static jsonToPublicDeck(data: any): DeckPublic;
    static jsonToTopCategory(data: any): CategoryTop;
    static jsonToTopCourse(data: any): CourseTop;
    static jsonToPublicCategories(data: any): CategoriesPublic;
    static jsonToPublicCategory(data: any): CategoryLink;
    static jsonToPublicUsers(data: any): UsersPublic;
    static jsonToUserDetails(data: any): UserDetailsDto;
    static jsonToLink(rel: string, data: any): Link;
    static jsonArrayToCollection(callback: Function, data: Array<any>): Array<any>;
}
