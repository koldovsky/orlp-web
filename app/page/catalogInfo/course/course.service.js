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
var orlp_service_1 = require("../../../orlp.service");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var CourseService = (function () {
    function CourseService(orlp) {
        this.orlp = orlp;
    }
    CourseService.prototype.getCourse = function (id) {
        return this.orlp.get('api/category/' + id + '/courses')
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('Courses: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    CourseService.prototype.addCourse = function (body, id) {
        // let headers = new Headers({'Content-Type': 'application/json'});
        // let options = new RequestOptions({headers : headers});
        return this.orlp.post('api/category/' + id + '/courses', body)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CourseService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return CourseService;
}());
CourseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [orlp_service_1.ORLPService])
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map