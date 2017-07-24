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
var http_1 = require("@angular/http");
var ORLPService = (function () {
    function ORLPService(http) {
        this.http = http;
        this.SERVER_ADDRESS = "http://localhost:8080/";
    }
    ORLPService.prototype.get = function (url) {
        return this.http.get(this.SERVER_ADDRESS + url);
    };
    ORLPService.prototype.post = function (url, body) {
        return this.http.post(this.SERVER_ADDRESS + url, body, {});
    };
    ORLPService.prototype.put = function (url, body) {
        return this.http.put(this.SERVER_ADDRESS + url, body, {});
    };
    ORLPService.prototype.delete = function (url, body) {
        // return this.http.delete(this.SERVER_ADDRESS + url, body, {});
        return this.http.delete(this.SERVER_ADDRESS + url, body);
    };
    ORLPService.prototype.getShortLink = function (link) {
        var url = link.href;
        url = url.replace(this.SERVER_ADDRESS, "");
        url = btoa(url);
        url = encodeURI(url);
        return url;
    };
    ORLPService.prototype.decodeLink = function (url) {
        url = decodeURI(url);
        url = atob(url);
        return url;
    };
    return ORLPService;
}());
ORLPService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ORLPService);
exports.ORLPService = ORLPService;
//# sourceMappingURL=orlp.service.js.map