import {Link} from "../link";

export class DeckLinkByCategory {
    public name: String;
    public description: String;
    public self: Link;
    public cards: Link;

    constructor(name: String, description: String, self: Link, cards: Link) {
        this.name = name;
        this.description = description;
        this.self = self;
        this.cards = cards;
    }
}