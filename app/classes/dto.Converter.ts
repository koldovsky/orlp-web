import {CategoryTop} from "./CategoryDTO/top.category.DTO";
import {Link} from "./link";
import {CategoryLink} from "./CategoryDTO/link.category.DTO";
import {DeckPublic} from "./DeckDTO/public.deck.DTO";
import {CategoriesPublic} from "./CategoryDTO/public.categories";
import {CourseTop} from "./CourseDTO/top.course.DTO";
import {UsersPublic} from "./public.users.DTO";
import {UsersDTO} from "./UserDTO/UserDTO";
import {CourseLink} from "./CourseDTO/link.course.DTO";
import {UserDetailsDto} from "./UserDetailsDto";

export class DTOConverter {

    public static jsonToUserDTO(data: any): UsersDTO {
        let self: Link = DTOConverter.jsonToLink("self", data._links.self);
        let folder: Link = DTOConverter.jsonToLink("folder", data._links.folder);

        return new UsersDTO(data.firstName, data.lastName, data.email, self, folder);
    }

    public static jsonToPublicCourse(data: any): CourseLink {
        let self: Link = DTOConverter.jsonToLink("self", data._links.self);
        let decks: Link = DTOConverter.jsonToLink("decks", data._links.decks);

        return new CourseLink(data.name, data.description, data.imagebase64, self, decks);
    }

    public static jsonToPublicDeck(data: any): DeckPublic {
        let self: Link = DTOConverter.jsonToLink("self", data._links.self);

        return new DeckPublic(data.name, data.description, data.rating, self);
    }

    public static jsonToTopCategory(data: any): CategoryTop {
        let self: Link = DTOConverter.jsonToLink("self", data._links.self);

        return new CategoryTop(data.name, data.imagebase64, self);
    }

    public static jsonToTopCourse(data: any): CourseTop {
        let self: Link = DTOConverter.jsonToLink("self", data._links.self);

        return new CourseTop(data.name, data.imagebase64, self);
    }

    public static jsonToPublicCategories(data: any): CategoriesPublic {
        let self: Link = DTOConverter.jsonToLink("self", data._links.self);

        return new CategoriesPublic(data.name, data.description, data.imagebase64, self);
    }

    public static jsonToPublicCategory(data: any): CategoryLink {
        let self: Link = DTOConverter.jsonToLink("self", data._links.self);
        let courses: Link = DTOConverter.jsonToLink("courses", data._links.courses);
        let decks: Link = DTOConverter.jsonToLink("decks", data._links.decks);

        return new CategoryLink(data.name, data.description, data.imagebase64, self, decks, courses);
    }

    public static jsonToPublicUsers(data: any): UsersPublic {
        let self: Link = DTOConverter.jsonToLink("self", data._links.self);

        return new UsersPublic (data.firstName, data.lastName, data.email, data.accountStatus, self);
    }

    public static jsonToUserDetails(data:any): UserDetailsDto{
        let self: Link = DTOConverter.jsonToLink("self", data._links.self);
        return new UserDetailsDto(data.firstName, data.lastName, data.email, self);
    }

    public static jsonToLink(rel: string, data: any): Link {
        return new Link(rel, data.href);
    }

    public static jsonArrayToCollection(callback: Function, data: Array<any>): Array<any> {
        let array: Array<any> = [];
        data.forEach(element => {
            array.push(callback(element));
        });
        return array;
    }
}