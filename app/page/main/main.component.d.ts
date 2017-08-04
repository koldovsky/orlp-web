import { OnInit } from "@angular/core";
import { MainService } from "./main.service";
import { ORLPService } from "../../services/orlp.service";
import { Link } from "../../dto/link";
import { CategoryTop } from "../../dto/CategoryDTO/top.category.DTO";
import { CourseTop } from "../../dto/CourseDTO/top.course.DTO";
export declare class MainComponent implements OnInit {
    private mainService;
    private orlp;
    categories: CategoryTop[];
    courses: CourseTop[];
    errorMessage: string;
    constructor(mainService: MainService, orlp: ORLPService);
    ngOnInit(): void;
    getCategoryLink(link: Link): string;
    getCourseLink(link: Link): string;
}
