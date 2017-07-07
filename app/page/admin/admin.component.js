"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AdminComponent = (function () {
    function AdminComponent() {
        this.showTable = false;
        /*
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
            }*/
    }
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        // providers: [AdminService],
        template: require('app/page/admin/admin.component.html!text')
    })
], AdminComponent);
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map