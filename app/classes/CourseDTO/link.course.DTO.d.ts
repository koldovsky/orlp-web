import { Link } from "../link";
export declare class CourseLink {
    name: string;
    description: string;
    imagebase64: string;
    self: Link;
    decks: Link;
    constructor(name: string, description: string, imagebase64: string, self: Link, decks: Link);
}
