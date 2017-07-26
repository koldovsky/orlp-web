"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AdminMainComponent = (function () {
    function AdminMainComponent() {
    }
    return AdminMainComponent;
}());
AdminMainComponent = __decorate([
    core_1.Component({
        template: require('app/page/admin/admin.main.component.html!text'),
        styleUrls: ['app/page/admin/admin.style.css']
    })
], AdminMainComponent);
exports.AdminMainComponent = AdminMainComponent;
//# sourceMappingURL=admin.main.component.js.map