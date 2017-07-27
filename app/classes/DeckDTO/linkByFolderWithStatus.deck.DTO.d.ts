import { Link } from "../link";
export declare class DeckLinkByFolderWithStatus {
    name: String;
    description: String;
    self: Link;
    cards: Link;
    deckId: number;
    status: boolean;
    constructor(name: String, description: String, self: Link, cards: Link, deckId: number, status: boolean);
}
