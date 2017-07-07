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
var deck_service_1 = require("./deck.service");
var DeckComponent = (function () {
    function DeckComponent(deckService) {
        this.deckService = deckService;
    }
    DeckComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deckService.getDeck(this.id)
            .subscribe(function (decks) { return _this.decks = decks; }, function (error) { return _this.errorMessage = error; });
    };
    DeckComponent.prototype.addDeck = function (value) {
        var _this = this;
        this.deckService.addDeck(value, this.id).subscribe(function (data) { return _this.decks.push(data); }, function (error) { return console.log(error); });
    };
    return DeckComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DeckComponent.prototype, "id", void 0);
DeckComponent = __decorate([
    core_1.Component({
        selector: 'table2',
        template: require('./deck.component.html!text')
    }),
    __metadata("design:paramtypes", [deck_service_1.DeckService])
], DeckComponent);
exports.DeckComponent = DeckComponent;
//# sourceMappingURL=deck.component.js.map