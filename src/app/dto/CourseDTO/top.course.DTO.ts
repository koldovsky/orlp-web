import {Link} from '../link';

export class CourseTop {
    public courseId: number;
    public name: string;
    public image: string;
    public rating: number;
    public self: Link;

    constructor(courseId: number, name: string, image: string, rating: number, self: Link) {
        this.courseId = courseId;
        this.name = name;
        this.image = image;
        this.rating = rating;
        this.self = self;
    }
}
