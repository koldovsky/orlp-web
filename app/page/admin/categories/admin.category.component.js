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
var admin_category_service_1 = require("./admin.category.service");
var orlp_service_1 = require("../../../orlp.service");
var AdminCategoryComponent = (function () {
    function AdminCategoryComponent(adminCategoryService, orlpService) {
        this.adminCategoryService = adminCategoryService;
        this.orlpService = orlpService;
        this.showTable = false;
    }
    AdminCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminCategoryService.getCatalogs()
            .subscribe(function (categories) { return _this.categories = categories; }, function (error) { return _this.errorMessage = error; });
    };
    AdminCategoryComponent.prototype.toggleTable = function () {
        this.showTable = !this.showTable;
    };
    return AdminCategoryComponent;
}());
AdminCategoryComponent = __decorate([
    core_1.Component({
        selector: "admin-all-category",
        providers: [admin_category_service_1.AdminCategoryService],
        template: require('app/page/admin/categories/admin.category.component.html!text')
    }),
    __metadata("design:paramtypes", [admin_category_service_1.AdminCategoryService, orlp_service_1.ORLPService])
], AdminCategoryComponent);
exports.AdminCategoryComponent = AdminCategoryComponent;
//# sourceMappingURL=admin.category.component.js.map