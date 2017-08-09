import {Link} from "../link";

export class DeckLinkByFolderWithStatus {

    public name: String;
    public description: String;
    public self: Link;
    public cards: Link;
    public deckId: number;
    public status: boolean;

    constructor(name: String, description: String, self: Link, cards: Link, deckId: number, status: boolean) {
        this.name = name;
        this.description = description;
        this.self = self;
        this.cards = cards;
        this.deckId = deckId;
        this.status = status;
    }
}