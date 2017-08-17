import {Link} from '../link';

export class DeckLinkByFolder {

    public name: String;
    public description: String;
    public rating: number;
    public self: Link;
    public cards: Link;

    constructor(name: String, description: String, rating: number, self: Link, cards: Link) {
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.self = self;
        this.cards = cards;
    }
}

