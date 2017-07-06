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
var orlp_service_1 = require("../../orlp.service");
var SignupService = (function () {
    function SignupService(_orlp) {
        this._orlp = _orlp;
        this._controllerUrl = 'http://localhost:8080/api/registration';
    }
    SignupService.prototype.registerUser = function (newUser) {
        /*  let headers = new Headers({'Content-Type': 'application/json'});
          let options = new RequestOptions({ headers : headers });
          return this._orlp.post(this._controllerUrl, newUser, options).map(this.);*/
        return new Observable_1.Observable();
    };
    SignupService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return SignupService;
}());
SignupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [orlp_service_1.ORLPService])
], SignupService);
exports.SignupService = SignupService;
//# sourceMappingURL=signup.service.js.map