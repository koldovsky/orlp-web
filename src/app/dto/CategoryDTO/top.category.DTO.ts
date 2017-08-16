import {Link} from '../link';

export class CategoryTop {
    public name: string;
    public image: string;
    public self: Link;

    constructor(name: string, image: string, self: Link) {
        this.name = name;
        this.image = image;
        this.self = self;
    }

}
