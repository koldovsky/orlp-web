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
var AccountVerificationComponent = (function () {
    function AccountVerificationComponent(activatedRoute, http, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.router = router;
        this._url = "dfse";
        this.sendTokenToController = function () {
            _this.
            ;
        };
    }
    AccountVerificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.token = params['token'];
            console.log('token= ' + _this.token);
            _this.router.navigate(['registr']);
        });
    };
    return AccountVerificationComponent;
}());
AccountVerificationComponent = __decorate([
    core_1.Component({
        template: "\n        <html>\n        <head></head>\n        <body>\n        <div>Hello</div>\n        <br/>\n        <span>your token = {{token}}</span>\n        </body>\n        </html>\n    "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, http_1.Http, router_1.Router])
], AccountVerificationComponent);
exports.AccountVerificationComponent = AccountVerificationComponent;
//# sourceMappingURL=accountVerification.component.js.map