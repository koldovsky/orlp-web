import {Link} from "../link";

export class DeckLinkByCategory {

    public name: String;
    public description: String;
    public self: Link;
    public cards: Link;
    public deckId: number;

    constructor(name: String, description: String, self: Link, cards: Link, deckid: number) {
        this.name = name;
        this.description = description;
        this.self = self;
        this.cards = cards;
        this.deckId = deckid;
    }
}