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
var admin_user_service_1 = require("./admin.user.service");
var orlp_service_1 = require("../../../../orlp.service");
var router_1 = require("@angular/router");
var AdminUserComponent = (function () {
    function AdminUserComponent(route, orlp, adminUserSevice) {
        this.route = route;
        this.orlp = orlp;
        this.adminUserSevice = adminUserSevice;
    }
    AdminUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var url = params['url'];
            _this.url = url;
        });
        this.takeUser();
    };
    AdminUserComponent.prototype.takeUser = function () {
        var _this = this;
        this.decodeLink();
        this.adminUserSevice.getUser(this.url).subscribe(function (user) { return _this.user = user; }, function (error) { return _this.errorMessage = error; });
    };
    AdminUserComponent.prototype.decodeLink = function () {
        this.url = this.orlp.decodeLink(this.url);
    };
    AdminUserComponent.prototype.getUserLink = function (link) {
        return this.orlp.getShortLink(link);
    };
    AdminUserComponent.prototype.updateAccountState = function (currentUser) {
        var _this = this;
        this.adminUserSevice.updateAccountState(currentUser, this.url).subscribe(function (user) { return _this.user = user; }, function (error) { return console.log(error); });
    };
    AdminUserComponent.prototype.deleteAccountState = function (currentUser) {
        var _this = this;
        this.adminUserSevice.deleteAccountState(currentUser, this.url).subscribe(function (user) { return _this.user = user; }, function (error) { return console.log(error); });
    };
    AdminUserComponent.prototype.toggleDelete = function () {
        this.clickedButton = true;
    };
    AdminUserComponent.prototype.toggleUp = function () {
        this.clickedButton = false;
    };
    AdminUserComponent.prototype.onOK = function (currentUser) {
        switch (currentUser.accountStatus) {
            case "ACTIVE": {
                if (this.clickedButton) {
                    this.deleteAccountState(currentUser);
                }
                else {
                    this.updateAccountState(currentUser);
                }
                break;
            }
            case "DELETED": {
                this.deleteAccountState(currentUser);
                break;
            }
            case "BLOCKED": {
                this.updateAccountState(currentUser);
                break;
            }
        }
    };
    return AdminUserComponent;
}());
AdminUserComponent = __decorate([
    core_1.Component({
        selector: 'one-user',
        providers: [admin_user_service_1.AdminUserService],
        template: require('app/page/admin/users/user/admin.user.component.html!text'),
        styleUrls: ['app/page/admin/admin.style.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        orlp_service_1.ORLPService,
        admin_user_service_1.AdminUserService])
], AdminUserComponent);
exports.AdminUserComponent = AdminUserComponent;
//# sourceMappingURL=admin.user.component.js.map