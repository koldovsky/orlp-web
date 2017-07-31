<<<<<<< HEAD
import { Injectable } from '@angular/core';
import {ORLPService} from "../../../orlp.service";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
=======
import {Injectable} from '@angular/core';
import {ORLPService} from "../../../orlp.service";
import {Observable} from "rxjs/Observable";
import {Response} from "@angular/http";
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
<<<<<<< HEAD
import {IDeck} from "../../../interfaces/deck";
import {Template} from "../../../interfaces/templateUrl";
import {DeckPublic} from "../../../classes/DeckDTO/public.deck.DTO";
import {DTOConverter} from "../../../classes/dto.Converter";
import {DeckLinkByCategory} from "../../../classes/DeckDTO/linkByCategory.deck.DTO";
=======
import {DeckPublic} from "../../../classes/DeckDTO/public.deck.DTO";
import {DTOConverter} from "../../../classes/dto.Converter";
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250

@Injectable()
export class DeckService {

<<<<<<< HEAD
    constructor(private orlp: ORLPService) { }

    getDecks(url : string): Observable<DeckLinkByCategory[]> {
        return this.orlp.get(url)
            .map((response: Response) => <DeckLinkByCategory[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToDeckLinkByCategory, response.json()))
            .catch(this.handleError);
    }

    addDeckToFolder(deckId: number): Observable<DeckPublic> {
        return this.orlp.put("api/user/folder/add/deck/" +  deckId, {})
            .map((response: Response) => {
            response.json();
            })
            .catch(this.handleError);
    }

    getIdDecksInYourFolder(): Observable<number[]> {
        return this.orlp.get("api/private/user/folder/decks/id")
            .map((response: Response) => response.json())
=======
    constructor(private orlp: ORLPService) {
    }

    getDecks(url: string): Observable<DeckPublic[]> {
        return this.orlp.get(url)
            .map((response: Response) => <DeckPublic[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicDeck, response.json()))
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}
