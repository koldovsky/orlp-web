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
var angular_star_rating_1 = require("angular-star-rating");
var courseInfo_service_1 = require("./courseInfo.service");
var courseInfo_component_1 = require("./courseInfo.component");
var CourseInfoModule = (function () {
    function CourseInfoModule() {
    }
    return CourseInfoModule;
}());
CourseInfoModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            angular_star_rating_1.StarRatingModule,
            router_1.RouterModule.forChild([
                { path: 'course/top/:url', component: courseInfo_component_1.CourseInfoComponent }
            ])
        ],
        exports: [],
        declarations: [
            courseInfo_component_1.CourseInfoComponent,
        ],
        providers: [courseInfo_service_1.CourseInfoService],
    })
], CourseInfoModule);
exports.CourseInfoModule = CourseInfoModule;
//# sourceMappingURL=courseInfo.module.js.map