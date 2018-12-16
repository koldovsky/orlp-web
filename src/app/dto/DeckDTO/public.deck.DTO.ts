import {Link} from '../link';

export class DeckPublic {
    public deckId: number;
    public name: string;
    public description: string;
    public rating: number;
    public self: Link;
    public price: number;

    constructor(deckId: number, name: string, description: string, rating: number, self: Link,price: number) {
        this.deckId = deckId;
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.self = self;
        this.price= price;
    }
}
