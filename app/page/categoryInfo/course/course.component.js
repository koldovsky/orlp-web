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
var course_service_1 = require("./course.service");
var orlp_service_1 = require("../../../orlp.service");
var CourseComponent = (function () {
    function CourseComponent(courseService, orlpService) {
        this.courseService = courseService;
        this.orlpService = orlpService;
    }
    CourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.url = this.orlpService.decodeLink(this.url);
        this.courseService.getCourse(this.url)
            .subscribe(function (courses) { return _this.courses = courses; }, function (error) { return _this.errorMessage = error; });
    };
    CourseComponent.prototype.getDecks = function (course) {
        var _this = this;
        this.courseService.getDecks(course.decks.href)
            .subscribe(function (decks) { return _this.decks = decks; }, function (error) { return _this.errorMessage = error; });
    };
    return CourseComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CourseComponent.prototype, "url", void 0);
CourseComponent = __decorate([
    core_1.Component({
        selector: 'course-table',
        template: require('./course.component.html!text'),
        styleUrls: ['app/page/categoryInfo/categoryInfo.css']
    }),
    __metadata("design:paramtypes", [course_service_1.CourseService,
        orlp_service_1.ORLPService])
], CourseComponent);
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=course.component.js.map