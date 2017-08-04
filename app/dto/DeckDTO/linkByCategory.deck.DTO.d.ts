import { Link } from "../link";
export declare class DeckLinkByCategory {
    name: String;
    description: String;
    self: Link;
    cards: Link;
    deckId: number;
    constructor(name: String, description: String, self: Link, cards: Link, deckid: number);
}
