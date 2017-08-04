import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import {ORLPService} from "../../services/orlp.service";
import {DTOConverter} from "../../dto/dto.Converter";
import {UsersDTO} from "../../dto/UserDTO/UserDTO";
import {DeckLinkByFolder} from "../../dto/DeckDTO/linkByFolder.deck.DTO";
import {Link} from "../../dto/link";
import {DeckLinkByCategory} from "../../dto/DeckDTO/linkByCategory.deck.DTO";
import {link} from "fs";

@Injectable()
export class CabinetService {

    constructor(private orlp: ORLPService) {
    }

    public getUser(): Observable<UsersDTO> {
        return this.orlp.get('api/private/user')
            .map((response: Response) => <UsersDTO> DTOConverter.jsonToUserDTO(response.json()))
            .catch(this.handleError);
    }

    public getUserDecks(link: Link): Observable<DeckLinkByFolder[]> {

        let shortLink: string = this.orlp.getShortLink(link);
        shortLink = this.orlp.decodeLink(shortLink);

        return this.orlp.get(shortLink)
            .map((response: Response) => <DeckLinkByFolder[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToDeckLinkByFolder, response.json()))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
