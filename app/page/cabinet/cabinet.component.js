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
var cabinet_service_1 = require("./cabinet.service");
var orlp_service_1 = require("../../orlp.service");
var router_1 = require("@angular/router");
var CabinetComponent = (function () {
    function CabinetComponent(cabinetService, orlpService, router) {
        this.cabinetService = cabinetService;
        this.orlpService = orlpService;
        this.router = router;
    }
    CabinetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cabinetService.getUser()
            .subscribe(function (user) { return _this.user = user; }, function (error) { return _this.errorMessage = error; });
    };
    CabinetComponent.prototype.getUserDecks = function () {
        var _this = this;
        var folderUrl = this.user.folder.href;
        folderUrl = folderUrl.replace("http://localhost:8080/", "");
        this.cabinetService.getUserDecks(folderUrl)
            .subscribe(function (decks) {
            _this.decks = decks;
        }, function (error) { return _this.errorMessage = error; });
    };
    CabinetComponent.prototype.getCardsLink = function (link) {
        return this.orlpService.getShortLink(link);
    };
    CabinetComponent.prototype.startLearning = function (cards) {
        this.router.navigate(['/cards', this.getCardsLink(cards)]);
    };
    return CabinetComponent;
}());
CabinetComponent = __decorate([
    core_1.Component({
        providers: [cabinet_service_1.CabinetService],
        template: require('app/page/cabinet/cabinet.component.html!text'),
        styleUrls: ['app/page/cabinet/menu.css']
    }),
    __metadata("design:paramtypes", [cabinet_service_1.CabinetService,
        orlp_service_1.ORLPService,
        router_1.Router])
], CabinetComponent);
exports.CabinetComponent = CabinetComponent;
//# sourceMappingURL=cabinet.component.js.map