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
var courseInfo_service_1 = require("./courseInfo.service");
var router_1 = require("@angular/router");
var orlp_service_1 = require("../../orlp.service");
var CourseInfoComponent = (function () {
    function CourseInfoComponent(route, orlp, courseService) {
        this.route = route;
        this.orlp = orlp;
        this.courseService = courseService;
    }
    CourseInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.url = params['url'];
        });
        this.takeCourse();
    };
    CourseInfoComponent.prototype.takeCourse = function () {
        var _this = this;
        this.decodeLink();
        this.courseService.getCourse(this.url).subscribe(function (course) {
            _this.course = course;
            _this.takeDecks(course);
        }, function (error) { return _this.errorMessage = error; });
    };
    CourseInfoComponent.prototype.takeDecks = function (course) {
        var _this = this;
        this.courseService.getDecks(course).subscribe(function (decks) {
            _this.decks = decks;
            (function (error) { return _this.errorMessage = error; });
        });
    };
    CourseInfoComponent.prototype.decodeLink = function () {
        this.url = this.orlp.decodeLink(this.url);
    };
    return CourseInfoComponent;
}());
CourseInfoComponent = __decorate([
    core_1.Component({
        templateUrl: ('app/page/courseInfo/courseInfo.component.html'),
        styleUrls: ['app/page/courseInfo/courseInfo.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        orlp_service_1.ORLPService,
        courseInfo_service_1.CourseInfoService])
], CourseInfoComponent);
exports.CourseInfoComponent = CourseInfoComponent;
//# sourceMappingURL=courseInfo.component.js.map