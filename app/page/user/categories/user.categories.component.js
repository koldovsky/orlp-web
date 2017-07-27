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
var user_categories_service_1 = require("./user.categories.service");
var orlp_service_1 = require("../../../orlp.service");
var UserCategoriesComponent = (function () {
    function UserCategoriesComponent(userCategoriesService, orlpService) {
        this.userCategoriesService = userCategoriesService;
        this.orlpService = orlpService;
    }
    UserCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userCategoriesService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories; }, function (error) { return _this.errorMessage = error; });
    };
    UserCategoriesComponent.prototype.getCategoryLink = function (link) {
        return this.orlpService.getShortLink(link);
    };
    return UserCategoriesComponent;
}());
UserCategoriesComponent = __decorate([
    core_1.Component({
        selector: "user-all-categories",
        providers: [user_categories_service_1.UserCategoriesService],
        template: require('app/page/user/categories/user.categories.component.html!text')
    }),
    __metadata("design:paramtypes", [user_categories_service_1.UserCategoriesService, orlp_service_1.ORLPService])
], UserCategoriesComponent);
exports.UserCategoriesComponent = UserCategoriesComponent;
//# sourceMappingURL=user.categories.component.js.map