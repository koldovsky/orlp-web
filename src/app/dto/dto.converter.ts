import {CategoryTop} from './CategoryDTO/top.category.DTO';
import {Link} from './link';
import {CategoryLink} from './CategoryDTO/link.category.DTO';
import {DeckPublic} from './DeckDTO/public.deck.DTO';
import {CoursePublic} from './CourseDTO/public.course.DTO';
import {CategoriesPublic} from './CategoryDTO/public.categories';
import {CourseTop} from './CourseDTO/top.course.DTO';
import {DeckLinkByCategory} from './DeckDTO/linkByCategory.deck.DTO';
import {CardPublic} from './CardsDTO/public.card.DTO';
import {AdminUsers} from './AdminDTO/admin.user.DTO';
import {UsersDTO} from './UsersDTO/UserDTO';
import {CourseLink} from './CourseDTO/link.course.DTO';
import {UserDetailsDto} from './UserDetailsDto';
import {DeckLinkByFolder} from './DeckDTO/linkByFolder.deck.DTO';
import {CourseLinkWithId} from './CourseDTO/linkWithId.course.DTO';
import {AdminAudit} from './AdminDTO/admin.audit.DTO';
import {ImageDTO} from './ImageDTO/ImageDTO';
import {AdminDeck} from './AdminDTO/admin.deck.DTO';

export class DTOConverter {

  public static jsonToPublicCards(data: any): CardPublic {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new CardPublic(data.cardId, data.answer, data.question, self);
  }

  public static jsonToImageDTO(data: any): ImageDTO {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new ImageDTO(data.imageId, self);
  }

  public static jsonToUserDTO(data: any): UsersDTO {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    const folder: Link = DTOConverter.jsonToLink('folder', data._links.folder);
    const courses: Link = DTOConverter.jsonToLink('courses', data._links.courses);
    return new UsersDTO(data.userId, data.firstName, data.lastName, data.email, self, folder, courses);
  }

  public static jsonToPublicLinkCourse(data: any): CourseLink {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    const decks: Link = DTOConverter.jsonToLink('decks', data._links.decks);
    return new CourseLink(data.courseId, data.name, data.description, data.image, self, decks,
      data.rating, data.published, data.ownerId, data.categoryId);
  }

  public static jsonToPublicLinkCourseWithId(data: any): CourseLinkWithId {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    const decks: Link = DTOConverter.jsonToLink('decks', data._links.decks);
    return new CourseLinkWithId(data.courseId, data.name, data.description, data.rating, data.image, self, decks);
  }

  public static jsonToDeckLinkByFolder(data: any): DeckLinkByFolder {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    const cards: Link = DTOConverter.jsonToLink('cards', data._links.cards);
    return new DeckLinkByFolder(data.name, data.description, data.rating, self, cards);
  }

  public static jsonToPublicCourse(data: any): CoursePublic {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new CoursePublic(data.name, data.description, data.image, self);
  }

  public static jsonToPublicDeck(data: any): DeckPublic {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new DeckPublic(data.deckId, data.name, data.description, data.rating, self);
  }

  public static jsonToDeckLinkByCategory(data: any): DeckLinkByCategory {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    const cards: Link = DTOConverter.jsonToLink('cards', data._links.cards);
    return new DeckLinkByCategory(data.name, data.description, data.rating, self, cards, data.deckId);
  }

  public static jsonToTopCategory(data: any): CategoryTop {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new CategoryTop(data.name, data.image, self);
  }

  public static jsonToTopCourse(data: any): CourseTop {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new CourseTop(data.name, data.image, self);
  }

  public static jsonToPublicCategories(data: any): CategoriesPublic {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new CategoriesPublic(data.name, data.description, data.image, self);
  }

  public static jsonToPublicCategory(data: any): CategoryLink {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    const courses: Link = DTOConverter.jsonToLink('courses', data._links.courses);
    const decks: Link = DTOConverter.jsonToLink('decks', data._links.decks);
    return new CategoryLink(data.categoryId, data.name, data.description, data.image, self, decks, courses);
  }

  public static jsonToAdminUsers(data: any): AdminUsers {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new AdminUsers(data.firstName, data.lastName, data.email, data.accountStatus, self);
  }

  public static jsonToAdminAudit(data: any): AdminAudit {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new AdminAudit(data.accountEmail, data.action, data.ipAddress, data.role, data.time, self);
  }

  public static jsonToUserDetails(data: any): UserDetailsDto {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
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

  public static jsonToAdminDeck(data: any): AdminDeck {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new AdminDeck( data.deckId, data.name, data.description, data.rating, data.category, data.categoryId, data.owner, self);
  }
}
