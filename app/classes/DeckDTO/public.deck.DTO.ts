import {Link} from "../link";

export class DeckPublic {
    public name: string;
    public description: string;
    public self: Link;

    constructor(name: string, description: string, self: Link) {
        this.name = name;
        this.description = description;
        this.self = self;
    }
}