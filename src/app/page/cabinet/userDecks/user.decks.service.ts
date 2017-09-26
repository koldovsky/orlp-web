import {Injectable} from "@angular/core";
import {ORLPService} from "../../../services/orlp.service";
import {UserDTO} from "../../../dto/UsersDTO/UserDTO";
import {Observable} from "rxjs";
import {DTOConverter} from "../../../dto/dto.converter";
import {DeckDTO} from "../../../dto/DeckDTO/DeckDTO";
import {Link} from "../../../dto/link";
import {Response} from "@angular/http";
import {CategoryLink} from "../../../dto/CategoryDTO/link.category.DTO";
import {NewDeckDTO} from "../../../dto/DeckDTO/deck.added.DTO";

@Injectable()
export class UserDecksService {

  constructor(private orlp: ORLPService) {}

  getUser(): Observable<UserDTO> {
    return this.orlp.get('api/private/user')
      .map((response: Response) => <UserDTO> DTOConverter.jsonToUserDTO(response.json()));
  }

  getCategories(): Observable<CategoryLink[]> {
    return this.orlp.get('api/category').map((response: Response) =>
      <CategoryLink[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicCategory, response.json()));
  }

  getOnlyDecksCreatedByTheUser(userId: number): Observable<DeckDTO[]> {
    return this.orlp.get('api/private/user/folder/51/decks/own').map((response: Response) =>
      <DeckDTO[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToDeck, response.json()));
  }

  createDeck(deck: NewDeckDTO) {
    return this.orlp.post('api/private/category/' + deck.categoryId + '/decks', deck)
      .map((response: Response) => response.json());
  }

  editDeck(deck: DeckDTO) {
    return this.orlp.put('api/private/category/' + deck.categoryId + '/deck/' + deck.deckId, deck)
      .map((response: Response) => response.json());
  }

  deleteDeck(categoryId: number, deckId: number) {
    return this.orlp.delete('api/private/category/' + categoryId + '/deck/' + deckId)
      .map((response: Response) => response.json());
  }
}
