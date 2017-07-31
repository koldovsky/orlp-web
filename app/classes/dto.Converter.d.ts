import { CategoryTop } from "./CategoryDTO/top.category.DTO";
import { Link } from "./link";
import { CategoryLink } from "./CategoryDTO/link.category.DTO";
import { DeckPublic } from "./DeckDTO/public.deck.DTO";
<<<<<<< HEAD
import { CoursePublic } from "./CourseDTO/public.course.DTO";
import { CategoriesPublic } from "./CategoryDTO/public.categories";
import { CourseTop } from "./CourseDTO/top.course.DTO";
import { DeckLinkByCategory } from "./DeckDTO/linkByCategory.deck.DTO";
import { CardPublic } from "./CardsDTO/public.card.DTO";
=======
import { CategoriesPublic } from "./CategoryDTO/public.categories";
import { CourseTop } from "./CourseDTO/top.course.DTO";
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
import { AdminUsers } from "./admin.users.DTO";
import { UsersDTO } from "./UserDTO/UserDTO";
import { CourseLink } from "./CourseDTO/link.course.DTO";
import { UserDetailsDto } from "./UserDetailsDto";
<<<<<<< HEAD
import { DeckLinkByFolder } from "./DeckDTO/linkByFolder.deck.DTO";
export declare class DTOConverter {
    static jsonToPublicCards(data: any): CardPublic;
    static jsonToUserDTO(data: any): UsersDTO;
    static jsonToPublicLinkCourse(data: any): CourseLink;
    static jsonToDeckLinkByFolder(data: any): DeckLinkByFolder;
    static jsonToPublicCourse(data: any): CoursePublic;
    static jsonToPublicDeck(data: any): DeckPublic;
    static jsonToDeckLinkByCategory(data: any): DeckLinkByCategory;
=======
import { CoursePublic } from "./CourseDTO/public.course.DTO";
export declare class DTOConverter {
    static jsonToUserDTO(data: any): UsersDTO;
    static jsonToPublicLinkCourse(data: any): CourseLink;
    static jsonToPublicCourse(data: any): CoursePublic;
    static jsonToPublicDeck(data: any): DeckPublic;
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
    static jsonToTopCategory(data: any): CategoryTop;
    static jsonToTopCourse(data: any): CourseTop;
    static jsonToPublicCategories(data: any): CategoriesPublic;
    static jsonToPublicCategory(data: any): CategoryLink;
    static jsonToAdminUsers(data: any): AdminUsers;
    static jsonToUserDetails(data: any): UserDetailsDto;
    static jsonToLink(rel: string, data: any): Link;
    static jsonArrayToCollection(callback: Function, data: Array<any>): Array<any>;
}
