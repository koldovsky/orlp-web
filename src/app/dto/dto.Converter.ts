import {CategoryTop} from "./CategoryDTO/top.category.DTO";
import {Link} from "./link";
import {CategoryLink} from "./CategoryDTO/link.category.DTO";
import {DeckPublic} from "./DeckDTO/public.deck.DTO";
import {CoursePublic} from "./CourseDTO/public.course.DTO";
import {CategoriesPublic} from "./CategoryDTO/public.categories";
import {CourseTop} from "./CourseDTO/top.course.DTO";
import {DeckLinkByCategory} from "./DeckDTO/linkByCategory.deck.DTO";
import {CardPublic} from "./CardsDTO/public.card.DTO";
import {AdminUsers} from "./admin.users.DTO";
import {UsersDTO} from "./UsersDTO/UserDTO";
import {CourseLink} from "./CourseDTO/link.course.DTO";
import {UserDetailsDto} from "./UserDetailsDto";
import {DeckLinkByFolder} from "./DeckDTO/linkByFolder.deck.DTO";
import {CourseLinkWithId} from "./CourseDTO/linkWithId.course.DTO";

export class DTOConverter {

    public static jsonToPublicCards(data: any): CardPublic {
        const self: Link = DTOConverter.jsonToLink('self', data._links.self);

        return new CardPublic(data.answer, data.question, self);
    }

  public static jsonToUserDTO(data: any): UsersDTO {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    const folder: Link = DTOConverter.jsonToLink('folder', data._links.folder);
    const courses: Link = DTOConverter.jsonToLink('courses', data._links.courses);

    return new UsersDTO(data.firstName, data.lastName, data.email, self, folder, courses);
  }

  public static jsonToPublicLinkCourse(data: any): CourseLink {
    let self: Link = DTOConverter.jsonToLink("self", data._links.self);
    let decks: Link = DTOConverter.jsonToLink("decks", data._links.decks);

    return new CourseLink(data.name, data.description, data.imagebase64, self, decks, data.rating);
  }

  public static jsonToPublicLinkCourseWithId(data: any): CourseLinkWithId {
    let self: Link = DTOConverter.jsonToLink("self", data._links.self);
    let decks: Link = DTOConverter.jsonToLink("decks", data._links.decks);

    return new CourseLinkWithId(data.courseId, data.name, data.description, data.rating, data.imagebase64, self, decks);
  }

    public static jsonToDeckLinkByFolder(data: any): DeckLinkByFolder {
        const self: Link = DTOConverter.jsonToLink('self', data._links.self);
        const cards: Link = DTOConverter.jsonToLink('cards', data._links.cards);

        return new DeckLinkByFolder(data.name, data.description, self, cards);
    }

    public static jsonToPublicCourse(data: any): CoursePublic {
        const self: Link = DTOConverter.jsonToLink('self', data._links.self);

        return new CoursePublic(data.name, data.description, data.imagebase64, self);
    }

    public static jsonToPublicDeck(data: any): DeckPublic {
        const self: Link = DTOConverter.jsonToLink('self', data._links.self);

        return new DeckPublic(data.name, data.description, data.rating, self);
    }

    public static jsonToDeckLinkByCategory(data: any): DeckLinkByCategory {
        const self: Link = DTOConverter.jsonToLink('self', data._links.self);
        const cards: Link = DTOConverter.jsonToLink('cards', data._links.cards);

        return new DeckLinkByCategory(data.name, data.description, self, cards, data.deckId);
    }

    public static jsonToTopCategory(data: any): CategoryTop {
        const self: Link = DTOConverter.jsonToLink('self', data._links.self);

        return new CategoryTop(data.name, data.imagebase64, self);
    }

    public static jsonToTopCourse(data: any): CourseTop {
        const self: Link = DTOConverter.jsonToLink('self', data._links.self);

        return new CourseTop(data.name, data.imagebase64, self);
    }

    public static jsonToPublicCategories(data: any): CategoriesPublic {
        const self: Link = DTOConverter.jsonToLink('self', data._links.self);

        return new CategoriesPublic(data.name, data.description, data.imagebase64, self);
    }

    public static jsonToPublicCategory(data: any): CategoryLink {
        const self: Link = DTOConverter.jsonToLink('self', data._links.self);
        const courses: Link = DTOConverter.jsonToLink('courses', data._links.courses);
        const decks: Link = DTOConverter.jsonToLink('decks', data._links.decks);

        return new CategoryLink(data.name, data.description, data.imagebase64, self, decks, courses);
    }

    public static jsonToAdminUsers(data: any): AdminUsers {
        const self: Link = DTOConverter.jsonToLink('self', data._links.self);
        return new AdminUsers(data.firstName, data.lastName, data.email, data.accountStatus, self);
    }

    public static jsonToUserDetails(data: any): UserDetailsDto {
        let self: Link = DTOConverter.jsonToLink("self", data._links.self);
        return new UserDetailsDto(data.firstName, data.lastName, data.email, data.image, data.authorities, self);
    }

    public static jsonToLink(rel: string, data: any): Link {
        return new Link(rel, data.href);
    }

    public static jsonArrayToCollection(callback: Function, data: Array<any>): Array<any> {
        const array: Array<any> = [];
        data.forEach(element => {
            array.push(callback(element));
        });
        return array;
    }
}
