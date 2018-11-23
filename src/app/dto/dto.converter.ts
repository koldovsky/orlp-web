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
import {UserDTO} from './UsersDTO/UserDTO';
import {CourseLink} from './CourseDTO/link.course.DTO';
import {UserDetailsDto} from './UserDetailsDto';
import {DeckLinkByFolder} from './DeckDTO/linkByFolder.deck.DTO';
import {CourseLinkWithId} from './CourseDTO/linkWithId.course.DTO';
import {AdminAudit} from './AdminDTO/admin.audit.DTO';
import {ImageDTO} from './ImageDTO/ImageDTO';
import {AdminDeck} from './AdminDTO/admin.deck.DTO';
import {DeckDTO} from './DeckDTO/DeckDTO';
import {CreateCardDTO} from './CardsDTO/CreateCardDTO';
import {AdminDeckByPage} from './AdminDTO/admin.deck.with.pages.DTO';
import {AdminAuditWithPagesDTO} from './AdminDTO/admin.audit.with.pages.DTO';
import {AdminUsersByPage} from './AdminDTO/admin.users.with.pages.DTO';
import {DeckByCategoryAndPageDTO} from './DeckDTO/linkToDeckByCategoryAndPage';
import {CoursePageDTO} from './CourseDTO/linkToCourseByPageDTO';
import {CoursesByCategoryAndPageDTO} from './CourseDTO/linkToCoursesByCategoryAndPage';
import {CommentDTO} from './CommentDTO/commentDTO';
import {UserRoleDTO} from './CommentDTO/UeserRoleDTO';
import {RememberingLevelDTO} from './remembering.level.dto';
import {CategoriesByPageDTO} from './CategoryDTO/link.categories.by.page.DTO';
import {DeckSynthaxDTO} from './DeckDTO/deckSynthaxDTO';
import {ProfileDataDTO} from './UserProfileDTO/ProfileDataDTO';
import {ProfileImageDTO} from './UserProfileDTO/ProfileImageDTO';
import {ProfilePersonalInfoDTO} from './UserProfileDTO/ProfilePersonalInfoDTO';
import {AccountDTO} from './AccountDTO/accountDTO';
import {SendPointsToFriendDTO} from './UserProfileDTO/SendPointsToFriendDTO';
import {DeckPriceDTO} from './DeckDTO/DeckPriceDTO';

export class DTOConverter {

  public static jsonToProfileDataDTO(data: any): ProfileDataDTO {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new ProfileDataDTO(data.email, data.firstName, data.lastName, data.imageBase64, data.authenticationType, self);
  }

  public static jsonToProfilePersonalInfoDTO(data: any): ProfilePersonalInfoDTO {
    return new ProfilePersonalInfoDTO(data.firstName, data.lastName);
  }

  public static jsonToProfileImageDTO(data: any): ProfileImageDTO {
    return new ProfileImageDTO(data.imageBase64);
  }

  public static jsonToPublicCards(data: any): CardPublic {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new CardPublic(data.cardId, data.title, data.answer, data.question, data.rating, self, data.cardImages);
  }

  public static jsonToImageDTO(data: any): ImageDTO {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new ImageDTO(data.id, data.isImageUsed, self);
  }

  public static jsonToUserDTO(data: any): UserDTO {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    const folder: Link = DTOConverter.jsonToLink('folder', data._links.folder);
    const courses: Link = DTOConverter.jsonToLink('courses', data._links.courses);
    return new UserDTO(data.userId, data.firstName, data.lastName, data.email, self, folder, courses);
  }

  public static jsonToPublicLinkCourse(data: any): CourseLink {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    const decks: Link = DTOConverter.jsonToLink('decks', data._links.decks);
    return new CourseLink(data.courseId, data.name, data.description, data.image, self, decks,
      data.rating, data.published, data.ownerId, data.categoryId);
  }

  public static jsonToCourseByCategoryAndPage(data: any): CoursesByCategoryAndPageDTO {
    const courseLinks: Array<CourseLink> = DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicLinkCourse, data.content);
    return new CoursesByCategoryAndPageDTO(courseLinks, data.totalPages);
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
    return new CoursePublic(data.courseId, data.name, data.description, data.image, data.coursePrice, self);
  }

  public static jsonToCourseByPage(data: any): CoursePageDTO {
    const coursesPublic: Array<CoursePublic> = DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicCourse, data.content);
    return new CoursePageDTO(coursesPublic, data.totalPages);
  }

  public static jsonToPublicDeck(data: any): DeckPublic {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new DeckPublic(data.deckId, data.name, data.description, data.rating, self);
  }

  public static jsonToDeck(data: any): DeckDTO {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    const cards: Link = DTOConverter.jsonToLink('cards', data._links.cards);
    return new DeckDTO(data.deckId, data.name, data.description, data.category, data.categoryId, data.rating,
       data.owner, cards, self,data.hidden, data.synthax, data.deckOwner, data.deckPrice != null ? new DeckPriceDTO(data.deckPrice.price) : null);
  }

  public static jsonToDeckLinkByCategory(data: any): DeckLinkByCategory {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    const cards: Link = DTOConverter.jsonToLink('cards', data._links.cards);
    return new DeckLinkByCategory(data.name, data.description, data.rating, self, cards, data.deckId,data.hidden, data.synthax, data.createdBy);
  }

  public static jsonToCategoriesByPage(data: any): CategoriesByPageDTO {
    const categories: Array<CategoriesPublic> = DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicCategories, data.content);
    return new CategoriesByPageDTO(categories, data.totalPages);
  }

  public static jsonToDeckByCategoryAndPage(data: any): DeckByCategoryAndPageDTO {
    const deckLinkByCategories: Array<DeckLinkByCategory> = DTOConverter.jsonArrayToCollection(DTOConverter
      .jsonToDeckLinkByCategory, data.content);
    return new DeckByCategoryAndPageDTO(deckLinkByCategories, data.totalPages);
  }

  public static jsonToTopCategory(data: any): CategoryTop {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new CategoryTop(data.name, data.image, self);
  }

  public static jsonToTopCourse(data: any): CourseTop {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new CourseTop(data.courseId, data.name, data.image, data.rating, self);
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

  public static jsonToAdminUsersByPage(data: any): AdminUsersByPage {
    const arrayAdminUsers: Array<AdminUsers> = DTOConverter.jsonArrayToCollection(DTOConverter.jsonToAdminUsers, data.content);
    return new AdminUsersByPage(arrayAdminUsers, data.totalPages);
  }

  public static jsonToAdminAudit(data: any): AdminAudit {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new AdminAudit(data.accountEmail, data.action, data.ipAddress, data.role, data.time, self);
  }

  public static jsonToAdminAuditByPage(data: any): AdminAuditWithPagesDTO {
    const arrayAdminAudit: Array<AdminAudit> = DTOConverter.jsonArrayToCollection(DTOConverter.jsonToAdminAudit, data.content);
    return new AdminAuditWithPagesDTO(arrayAdminAudit, data.totalPages);
  }

  public static jsonToUserDetails(data: any): UserDetailsDto {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new UserDetailsDto(data.firstName, data.lastName, data.email, data.imageType, data.imageBase64,
      data.image, data.authenticationType, data.authorities, data.accountStatus, data.deactivated, data.points, self);
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
    return new AdminDeck(data.deckId, data.name, data.description, data.rating, data.category, data.categoryId, data.owner, self);
  }

  public static jsonToDeckByPage(data: any): AdminDeckByPage {
    const arrayAdminDecks: Array<AdminDeck> = DTOConverter.jsonArrayToCollection(DTOConverter.jsonToAdminDeck, data.content);
    return new AdminDeckByPage(arrayAdminDecks, data.totalPages);
  }

  public static jsonToAdminDeckCards(data: any): CreateCardDTO {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new CreateCardDTO(data.title, data.question, data.answer, data.image, self);
  }

  public static jsonToCommentDTO(data: any): CommentDTO {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new CommentDTO(data.commentId, data.commentText, new Date(data.commentDate), data.personId, data.personFirstName,
      data.personLastName, data.imageType, data.imageBase64, data.image, data.listOfChildComments, self);
  }

  public static jsonToUserRoleDTO(data: any): UserRoleDTO {
    return new UserRoleDTO(data.userId, data.authorities);
  }

  public static jsonToRememberingLevel(data: any): RememberingLevelDTO {
    return new RememberingLevelDTO(data.id, data.orderNumber, data.name, data.numberOfPostponedDays);
  }

  public static jsonToDeckSynthax(data: any): DeckSynthaxDTO {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new DeckSynthaxDTO(data.synthax, data.deckId, self);
  }

  public static jsonToAccountDTO(data: any): AccountDTO {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new AccountDTO(data.learningRegime, data.rememberingLevels, data.cardsNumber, self);
  }

  public static jsonToSendPointsDTO(data: any): SendPointsToFriendDTO {
    return new SendPointsToFriendDTO(data.emailFrom, data.emailTo, data.points);
  }
}
