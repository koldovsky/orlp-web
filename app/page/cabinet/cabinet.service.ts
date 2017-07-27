import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import {ORLPService} from "../../orlp.service";
import {DTOConverter} from "../../classes/dto.Converter";
import {UsersDTO} from "../../classes/UserDTO/UserDTO";
import {DeckLinkByFolder} from "../../classes/DeckDTO/linkByFolder.deck.DTO";

@Injectable()
export class CabinetService {

    constructor(private orlp: ORLPService) {
    }

    public getUser(): Observable<UsersDTO> {
        return this.orlp.get('api/user')
            .map((response: Response) => <UsersDTO> DTOConverter.jsonToUserDTO(response.json()))
            .catch(this.handleError);
    }

    public getUserDecks(url: string): Observable<DeckLinkByFolder[]> {
        return this.orlp.get(url)
            .map((response: Response) => <DeckLinkByFolder[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToDeckLinkByFolder, response.json()))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
