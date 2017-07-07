import {Component, OnInit} from '@angular/core';
import {AdminService} from "./admin.service";
import {ICategoryForAdmin} from "../../interfaces/category-for-admin";

@Component({
    providers: [AdminService],
    template: require('app/page/admin/admin.component.html!text')
})

export class AdminComponent implements OnInit {
    catalogs: ICategoryForAdmin[];
    errorMessage: string;
    showTable: boolean = false;

    constructor(private adminService: AdminService) {
    }

    ngOnInit(): void {
        this.adminService.getCatalogs()
            .subscribe(catalogs => this.catalogs = catalogs,
                error => this.errorMessage = <any>error);
    }

    // addCourse(value: ICatalog) {
    //     this.adminService.addCourse(value).subscribe(
    //         data => this.courses.push(data),
    //         error => console.log(error)
    //     );
    // }

    toggleTable(): void {
        this.showTable = !this.showTable;
    }
}