import {Link} from "../link";

export class CoursePublic {
    public name: string;
    public description: string;
    public image: string;
    public self: Link;

    constructor(name: string, description: string, image: string, self: Link) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.self = self;
    }
}