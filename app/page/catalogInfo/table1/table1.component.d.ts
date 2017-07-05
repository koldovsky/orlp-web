import { OnInit } from '@angular/core';
import { ICourse } from "../../../interfaces/course";
import { Table1Service } from "./table1.service";
export declare class Table1Component implements OnInit {
    private table1Service;
    courses: ICourse[];
    errorMessage: string;
    id: number;
    constructor(table1Service: Table1Service);
    ngOnInit(): void;
}
