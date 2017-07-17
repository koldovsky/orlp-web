import {Link} from "./link";

export class CategoryTop {
    public name: string;
    public imagebase64: string;
    public self: Link;

    constructor(name: string, imagebase64: string, self: Link) {
        this.name = name;
        this.imagebase64 = imagebase64;
        this.self = self;
    }

}