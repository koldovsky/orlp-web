import {Link} from '../link';

export class CoursePublic {
    public courseId: string;
    public name: string;
    public description: string;
    public image: string;
    public price: number;
    public self: Link;

    constructor(courseId: string, name: string, description: string, image: string, price: number, self: Link) {
        this.courseId = courseId;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.self = self;
    }
}
