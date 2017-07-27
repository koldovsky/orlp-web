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
var router_1 = require("@angular/router");
var orlp_service_1 = require("../../orlp.service");
var card_service_1 = require("./card.service");
var CardComponent = (function () {
    function CardComponent(route, router, orlp, cardService) {
        this.route = route;
        this.router = router;
        this.orlp = orlp;
        this.cardService = cardService;
        this.routing = false;
        this.questionNumber = 1;
        this.answer = "";
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var url = params['url'];
            url = _this.orlp.decodeLink(url);
            _this.url = url;
        });
        this.cardService.getCards(this.url).subscribe(function (cards) {
            _this.cards = cards;
            console.log(JSON.stringify(cards));
        });
    };
    CardComponent.prototype.onRotate = function () {
        this.routing = true;
    };
    CardComponent.prototype.onRotateBack = function () {
        this.routing = false;
        this.getNextQuestion();
        this.answer = "";
    };
    CardComponent.prototype.getNextQuestion = function () {
        this.questionNumber++;
        if (this.cards[this.questionNumber] == undefined) {
            alert("The deck is over");
            this.router.navigate(['/main']);
        }
    };
    return CardComponent;
}());
CardComponent = __decorate([
    core_1.Component({
        template: require('./card.component.html!text'),
        styleUrls: ['app/page/card/card.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        orlp_service_1.ORLPService,
        card_service_1.CardService])
], CardComponent);
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map