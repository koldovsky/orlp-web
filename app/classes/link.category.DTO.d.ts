import { Link } from "./link";
export declare class CategoryLink {
    name: string;
    description: string;
    imagebase64: string;
    self: Link;
    decks: Link;
    courses: Link;
    constructor(name: string, description: string, imagebase64: string, self: Link, decks: Link, courses: Link);
}
