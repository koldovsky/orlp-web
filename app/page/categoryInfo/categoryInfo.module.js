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
var deck_component_1 = require("./deck/deck.component");
var course_component_1 = require("./course/course.component");
var course_service_1 = require("./course/course.service");
var deck_service_1 = require("./deck/deck.service");
var categoryInfo_component_1 = require("./categoryInfo.component");
var categoryInfo_service_1 = require("./categoryInfo.service");
var CategoryInfoModule = (function () {
    function CategoryInfoModule() {
    }
    return CategoryInfoModule;
}());
CategoryInfoModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            router_1.RouterModule.forChild([
                { path: 'category/:url', component: categoryInfo_component_1.CategoryInfoComponent }
            ])
        ],
        exports: [],
        declarations: [
            categoryInfo_component_1.CategoryInfoComponent,
            course_component_1.CourseComponent,
            deck_component_1.DeckComponent
        ],
        providers: [
            course_service_1.CourseService,
            deck_service_1.DeckService,
            categoryInfo_service_1.CategoryInfoService
        ],
    })
], CategoryInfoModule);
exports.CategoryInfoModule = CategoryInfoModule;
//# sourceMappingURL=categoryInfo.module.js.map