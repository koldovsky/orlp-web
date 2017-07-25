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
var admin_users_service_1 = require("./admin.users.service");
var orlp_service_1 = require("../../../orlp.service");
var AdminUsersComponent = (function () {
    function AdminUsersComponent(orlp, adminUsersSevice) {
        this.orlp = orlp;
        this.adminUsersSevice = adminUsersSevice;
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminUsersSevice.getUsers()
            .subscribe(function (users) { return _this.users = users; }, function (error) { return _this.errorMessage = error; });
    };
    AdminUsersComponent.prototype.getUserLink = function (link) {
        console.log('LINK : ' + link.href);
        console.log('Code : ' + this.orlp.getShortLink(link));
        return this.orlp.getShortLink(link);
    };
    return AdminUsersComponent;
}());
AdminUsersComponent = __decorate([
    core_1.Component({
        selector: "admin-all-users",
        providers: [admin_users_service_1.AdminUsersService],
        template: require('app/page/admin/users/admin.users.component.html!text'),
        styleUrls: ['app/page/admin/admin.style.css']
    }),
    __metadata("design:paramtypes", [orlp_service_1.ORLPService,
        admin_users_service_1.AdminUsersService])
], AdminUsersComponent);
exports.AdminUsersComponent = AdminUsersComponent;
//# sourceMappingURL=admin.users.component.js.map