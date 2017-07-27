"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var cabinet_component_1 = require("./cabinet.component");
var cabinet_service_1 = require("./cabinet.service");
var angular_star_rating_1 = require("angular-star-rating");
var CabinetModule = (function () {
    function CabinetModule() {
    }
    return CabinetModule;
}());
CabinetModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            angular_star_rating_1.StarRatingModule,
            router_1.RouterModule.forChild([
                { path: 'cabinet/folder', component: cabinet_component_1.CabinetComponent }
            ])
        ],
        exports: [],
        declarations: [cabinet_component_1.CabinetComponent],
        providers: [cabinet_service_1.CabinetService],
    })
], CabinetModule);
exports.CabinetModule = CabinetModule;
//# sourceMappingURL=cabinet.module.js.map