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
var orlp_service_1 = require("../../../orlp.service");
var router_1 = require("@angular/router");
var core_2 = require("angular2-cookie/core");
var linkByFolderWithStatus_deck_DTO_1 = require("../../../classes/DeckDTO/linkByFolderWithStatus.deck.DTO");
var DeckComponent = (function () {
    function DeckComponent(deckService, orlpService, router, cookieService) {
        this.deckService = deckService;
        this.orlpService = orlpService;
        this.router = router;
        this.cookieService = cookieService;
        this.decksWithStatus = [];
        this.decksIdInYourFolder = [];
    }
    DeckComponent.prototype.addDeckToFolder = function (deckId) {
        var _this = this;
        this.deckService.addDeckToFolder(deckId).subscribe(function (data) {
            _this.changeDeckStatus(deckId);
        }, function (error) { return console.log(error); });
    };
    DeckComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.url = this.orlpService.decodeLink(this.url);
        this.deckService.getDecks(this.url)
            .subscribe(function (decks) {
            _this.decks = decks;
            _this.getIdDecksInYourFolder();
            _this.createDecksWithStatus();
        }, function (error) { return _this.errorMessage = error; });
        this.cookie = this.cookieService.get("Authentication");
    };
    DeckComponent.prototype.getIdDecksInYourFolder = function () {
        var _this = this;
        this.deckService.getIdDecksInYourFolder().subscribe(function (id) {
            _this.decksIdInYourFolder = id;
            _this.setStatusForDecksThatInFolder();
        }, function (error) { return _this.errorMessage = error; });
    };
    DeckComponent.prototype.getCardsLink = function (link) {
        return this.orlpService.getShortLink(link);
    };
    DeckComponent.prototype.startLearning = function (cards) {
        this.router.navigate(['/cards', this.getCardsLink(cards)]);
    };
    DeckComponent.prototype.createDecksWithStatus = function () {
        for (var _i = 0, _a = this.decks; _i < _a.length; _i++) {
            var entry = _a[_i];
            this.decksWithStatus.push(new linkByFolderWithStatus_deck_DTO_1.DeckLinkByFolderWithStatus(entry.name, entry.description, entry.self, entry.cards, entry.deckId, false));
        }
    };
    DeckComponent.prototype.setStatusForDecksThatInFolder = function () {
        for (var _i = 0, _a = this.decksWithStatus; _i < _a.length; _i++) {
            var entry = _a[_i];
            for (var _b = 0, _c = this.decksIdInYourFolder; _b < _c.length; _b++) {
                var id = _c[_b];
                if (entry.deckId === id) {
                    entry.status = true;
                    break;
                }
            }
        }
    };
    DeckComponent.prototype.changeDeckStatus = function (deckId) {
        for (var _i = 0, _a = this.decksWithStatus; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.deckId === deckId) {
                entry.status = true;
            }
        }
    };
    return DeckComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DeckComponent.prototype, "url", void 0);
DeckComponent = __decorate([
    core_1.Component({
        selector: 'deck-table',
        template: require('./deck.component.html!text'),
        styleUrls: ['app/page/categoryInfo/categoryInfo.css']
    }),
    __metadata("design:paramtypes", [deck_service_1.DeckService,
        orlp_service_1.ORLPService,
        router_1.Router,
        core_2.CookieService])
], DeckComponent);
exports.DeckComponent = DeckComponent;
//# sourceMappingURL=deck.component.js.map