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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var orlp_service_1 = require("../../orlp.service");
var StartPageService = (function () {
    function StartPageService(orlp) {
        this.orlp = orlp;
    }
    StartPageService.prototype.getCategories = function () {
        return this.orlp.get('api/category/top/')
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('TOP CATEGORIES: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    StartPageService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return StartPageService;
}());
StartPageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [orlp_service_1.ORLPService])
], StartPageService);
exports.StartPageService = StartPageService;
//# sourceMappingURL=startPage.service.js.map