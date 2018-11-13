import {Link} from '../link';

export class CoursePublic {
    public courseId: string;
    public name: string;
    public description: string;
    public image: string;
    public self: Link;

    constructor(courseId: string, name: string, description: string, image: string, self: Link) {
        this.courseId = courseId;
        this.name = name;
        this.description = description;
        this.image = image;
        this.self = self;
    }
}
