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
var card_component_1 = require("./card.component");
<<<<<<< HEAD
var card_service_1 = require("./card.service");
=======
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
var CardModule = (function () {
    function CardModule() {
    }
    return CardModule;
}());
CardModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            router_1.RouterModule.forChild([
<<<<<<< HEAD
                { path: 'cards/:url', component: card_component_1.CardComponent }
=======
                { path: 'card', component: card_component_1.CardComponent }
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
            ])
        ],
        exports: [],
        declarations: [
            card_component_1.CardComponent
        ],
<<<<<<< HEAD
        providers: [card_service_1.CardService],
=======
        providers: [],
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
    })
], CardModule);
exports.CardModule = CardModule;
//# sourceMappingURL=card.module.js.map