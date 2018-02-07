import {Link} from '../link';
import {CourseLink} from "../CourseDTO/link.course.DTO";

export class CategoriesPublic {
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
