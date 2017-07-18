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
var main_service_1 = require("./main.service");
var orlp_service_1 = require("../../orlp.service");
var MainComponent = (function () {
    function MainComponent(MainService, orlp) {
        this.MainService = MainService;
        this.orlp = orlp;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MainService.getCategories()
            .subscribe(function (category) { return _this.categories = category; }, function (error) { return _this.errorMessage = error; });
        this.MainService.getCourses()
            .subscribe(function (course) { return _this.courses = course; }, function (error) { return _this.errorMessage = error; });
    };
    MainComponent.prototype.getCategoryLink = function (link) {
        return this.orlp.getShortLink(link);
    };
    MainComponent.prototype.getCourseLink = function (link) {
        return this.orlp.getShortLink(link);
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        template: require('app/page/main/main.component.html!text')
    }),
    __metadata("design:paramtypes", [main_service_1.MainService,
        orlp_service_1.ORLPService])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map