import { OnInit } from "@angular/core";
import { CoursePublic } from "../../../classes/CourseDTO/public.course.DTO";
import { UserCoursesService } from "./user.courses.service";
import { ORLPService } from "../../../orlp.service";
import { Link } from "../../../classes/link";
export declare class UserCoursesComponent implements OnInit {
    private userCoursesService;
    private orlpService;
    courses: CoursePublic[];
    errorMessage: string;
    listFilter: string;
    constructor(userCoursesService: UserCoursesService, orlpService: ORLPService);
    ngOnInit(): void;
    getCourseLink(link: Link): string;
}
