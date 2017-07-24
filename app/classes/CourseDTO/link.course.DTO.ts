import {Link} from "../link";

export class CourseLink {
    public name: string;
    public description: string;
    public imagebase64: string;
    public self: Link;
    public decks: Link;

    constructor(name: string, description: string, imagebase64: string, self: Link, decks: Link) {
        this.name = name;
        this.description = description;
        this.imagebase64 = imagebase64;
        this.self = self;
        this.decks = decks;
    }
}