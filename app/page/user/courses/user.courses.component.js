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
var user_courses_service_1 = require("./user.courses.service");
var orlp_service_1 = require("../../../orlp.service");
var UserCoursesComponent = (function () {
    function UserCoursesComponent(userCoursesService, orlpService) {
        this.userCoursesService = userCoursesService;
        this.orlpService = orlpService;
    }
    UserCoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userCoursesService.getCourses()
            .subscribe(function (courses) { return _this.courses = courses; }, function (error) { return _this.errorMessage = error; });
    };
    UserCoursesComponent.prototype.getCourseLink = function (link) {
        return this.orlpService.getShortLink(link);
    };
    return UserCoursesComponent;
}());
UserCoursesComponent = __decorate([
    core_1.Component({ template: require('app/page/user/courses/user.courses.component.html!text') }),
    __metadata("design:paramtypes", [user_courses_service_1.UserCoursesService, orlp_service_1.ORLPService])
], UserCoursesComponent);
exports.UserCoursesComponent = UserCoursesComponent;
//# sourceMappingURL=user.courses.component.js.map