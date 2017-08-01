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
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var orlp_service_1 = require("../../../../orlp.service");
var dto_Converter_1 = require("../../../../classes/dto.Converter");
var AdminUserService = (function () {
    function AdminUserService(orlp) {
        this.orlp = orlp;
    }
    AdminUserService.prototype.getUser = function (url) {
        return this.orlp.get(url)
            .map(function (response) { return dto_Converter_1.DTOConverter.jsonToAdminUsers(response.json()); })
            .catch(this.handleError);
    };
    AdminUserService.prototype.updateAccountState = function (body, url) {
        return this.orlp.put(url, body)
            .map(function (response) { return dto_Converter_1.DTOConverter.jsonToAdminUsers(response.json()); })
            .catch(this.handleError);
    };
    AdminUserService.prototype.deleteAccountState = function (url) {
        return this.orlp.delete(url)
            .map(function (response) { return dto_Converter_1.DTOConverter.jsonToAdminUsers(response.json()); })
            .catch(this.handleError);
    };
    AdminUserService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return AdminUserService;
}());
AdminUserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [orlp_service_1.ORLPService])
], AdminUserService);
exports.AdminUserService = AdminUserService;
//# sourceMappingURL=admin.user.service.js.map