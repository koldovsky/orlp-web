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
var CardComponent = (function () {
    function CardComponent() {
        this.routing = false;
        this.answer = "";
    }
    CardComponent.prototype.onRotate = function () {
        this.routing = true;
    };
    CardComponent.prototype.ngOnInit = function () { };
    return CardComponent;
}());
CardComponent = __decorate([
    core_1.Component({
        template: require('./card.component.html!text')
    }),
    __metadata("design:paramtypes", [])
], CardComponent);
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map