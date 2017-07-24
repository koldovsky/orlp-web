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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var accountVerification_service_1 = require("./accountVerification.service");
var AccountVerificationComponent = (function () {
    function AccountVerificationComponent(accVerify, http, router, activatedRoute) {
        var _this = this;
        this.accVerify = accVerify;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.token = params['token'];
            console.log('token= ' + _this.token);
        });
    }
    AccountVerificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.error = false;
        this.accVerify.accountVerificate(this.token).subscribe(function (success) {
            console.log(success);
            console.log(_this.verificationError);
            _this.router.navigate(['login']);
        }, function (error) {
            _this.error = true;
            console.log(error);
            _this.verificationError = true;
            console.log(_this.verificationError);
            _this.router.navigate(['registr']);
        });
    };
    return AccountVerificationComponent;
}());
AccountVerificationComponent = __decorate([
    core_1.Component({
        template: "",
    }),
    __metadata("design:paramtypes", [accountVerification_service_1.AccountVerificationService, http_1.Http, router_1.Router, router_1.ActivatedRoute])
], AccountVerificationComponent);
exports.AccountVerificationComponent = AccountVerificationComponent;
//# sourceMappingURL=accountVerification.component.js.map