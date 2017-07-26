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
var deck_service_1 = require("./search/deck.service");
var logout_service_1 = require("../logout/logout.service");
var router_1 = require("@angular/router");
var navbar_service_1 = require("./navbar.service");
var NavbarComponent = (function () {
    function NavbarComponent(deckService, logoutService, router, navbarService) {
        this.deckService = deckService;
        this.logoutService = logoutService;
        this.router = router;
        this.navbarService = navbarService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAuthorized = this.logoutService.isAuthorized();
        this.deckService.getDecks(this.url)
            .subscribe(function (decks) { return _this.decks = decks; }, function (error) { return _this.errorMessage = error; });
        this.navbarService.getUserDetails()
            .subscribe(function (user) { return _this.userDetails = user; });
    };
    NavbarComponent.prototype.logoutUser = function () {
        if (this.logoutService.logout()) {
            this.isAuthorized = false;
            this.router.navigate(['main']);
        }
    };
    return NavbarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NavbarComponent.prototype, "url", void 0);
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'page',
        template: require('./navbar.component.html!text'),
        styleUrls: ['app/page/navbar/navbar.css', 'app/page/navbar/dropdown.css']
    }),
    __metadata("design:paramtypes", [deck_service_1.DeckService,
        logout_service_1.LogoutService,
        router_1.Router,
        navbar_service_1.NavbarService])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map