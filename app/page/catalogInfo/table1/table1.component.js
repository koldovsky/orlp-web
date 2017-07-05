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
var table1_service_1 = require("./table1.service");
var Table1Component = (function () {
    function Table1Component(table1Service) {
        this.table1Service = table1Service;
    }
    Table1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.table1Service.getCourse(this.id)
            .subscribe(function (courses) { return _this.courses = courses; }, function (error) { return _this.errorMessage = error; });
    };
    return Table1Component;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], Table1Component.prototype, "id", void 0);
Table1Component = __decorate([
    core_1.Component({
        selector: 'table1',
        template: require('./table1.component.html!text')
    }),
    __metadata("design:paramtypes", [table1_service_1.Table1Service])
], Table1Component);
exports.Table1Component = Table1Component;
//# sourceMappingURL=table1.component.js.map