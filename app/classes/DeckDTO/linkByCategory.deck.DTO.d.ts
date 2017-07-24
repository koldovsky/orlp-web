import { Link } from "../link";
export declare class DeckLinkByCategory {
    name: String;
    description: String;
    self: Link;
    cards: Link;
    constructor(name: String, description: String, self: Link, cards: Link);
}
