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
var catalogInfo_component_1 = require("./catalogInfo.component");
var table1_component_1 = require("./table1/table1.component");
var table2_component_1 = require("./table2/table2.component");
var table1_service_1 = require("./table1/table1.service");
var table2_service_1 = require("./table2/table2.service");
var CatalogInfoModule = (function () {
    function CatalogInfoModule() {
    }
    return CatalogInfoModule;
}());
CatalogInfoModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            router_1.RouterModule.forChild([
                { path: 'catalog/:id', component: catalogInfo_component_1.CatalogInfoComponent }
            ])
        ],
        exports: [],
        declarations: [
            catalogInfo_component_1.CatalogInfoComponent,
            table1_component_1.Table1Component,
            table2_component_1.Table2Component
        ],
        providers: [
            table1_service_1.Table1Service,
            table2_service_1.Table2Service
        ],
    })
], CatalogInfoModule);
exports.CatalogInfoModule = CatalogInfoModule;
//# sourceMappingURL=catalogInfo.module.js.map