"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var admin_service_1 = require("./admin.service");
var AdminComponent = (function () {
    function AdminComponent(adminService) {
        this.adminService = adminService;
        this.showTable = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getCatalogs()
            .subscribe(function (categories) { return _this.categories = categories; }, function (error) { return _this.errorMessage = error; });
    };
    AdminComponent.prototype.toggleTable = function () {
        this.showTable = !this.showTable;
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        providers: [admin_service_1.AdminService],
        template: require('app/page/admin/admin.component.html!text')
    }),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminComponent);
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map