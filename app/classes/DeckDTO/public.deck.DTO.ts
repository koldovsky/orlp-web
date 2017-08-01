import {Link} from "../link";

export class DeckPublic {
    public name: string;
    public description: string;
    public rating: number;
    public self: Link;

    constructor(name: string, description: string, rating: number, self: Link) {
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.self = self;
    }
}