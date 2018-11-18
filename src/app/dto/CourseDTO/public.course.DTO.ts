import {Link} from '../link';

export class CoursePublic {
    public courseId: string;
    public name: string;
    public description: string;
    public image: string;
    public coursePrice: number;
    public self: Link;

    constructor(courseId: string, name: string, description: string, image: string, coursePrice: number, self: Link) {
        this.courseId = courseId;
        this.name = name;
        this.description = description;
        this.image = image;
        this.coursePrice = coursePrice;
        this.self = self;
    }
}
