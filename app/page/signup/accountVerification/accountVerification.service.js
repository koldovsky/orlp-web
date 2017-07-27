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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var AccountVerificationService = (function () {
    function AccountVerificationService(orlp) {
        this.orlp = orlp;
        this.subject = new BehaviorSubject_1.BehaviorSubject(false);
        this._controllerUrl = 'api/registrationConfirm';
    }
    ;
    AccountVerificationService.prototype.accountVerificate = function (token) {
        return this.orlp.post(this._controllerUrl, token);
    };
    AccountVerificationService.prototype.sendMessage = function () {
        this.subject.next(!this.subject.getValue());
    };
    AccountVerificationService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AccountVerificationService;
}());
AccountVerificationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [orlp_service_1.ORLPService])
], AccountVerificationService);
exports.AccountVerificationService = AccountVerificationService;
//# sourceMappingURL=accountVerification.service.js.map