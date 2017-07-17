"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var AccountVerificationService = (function () {
    function AccountVerificationService() {
        this._controllerUrl = 'http://localhost:8080/api/registrationConfirm';
    }
    AccountVerificationService.prototype.handleErrorObservable = function (error) {
        return Observable_1.Observable.throw(error.message || error);
    };
    return AccountVerificationService;
}());
AccountVerificationService = __decorate([
    core_1.Injectable()
], AccountVerificationService);
exports.AccountVerificationService = AccountVerificationService;
//# sourceMappingURL=AccountVerification.service.js.map