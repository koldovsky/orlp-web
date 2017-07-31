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
var categoryInfo_service_1 = require("./categoryInfo.service");
var CategoryInfoComponent = (function () {
    function CategoryInfoComponent(route, orlp, categoryService) {
        this.route = route;
        this.orlp = orlp;
        this.categoryService = categoryService;
        this.table1 = true;
        this.table2 = false;
    }
    CategoryInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.url = params['url'];
        });
        this.takeCategory();
    };
    CategoryInfoComponent.prototype.takeCategory = function () {
        var _this = this;
        this.decodeLink();
        this.categoryService.getCategory(this.url).subscribe(function (category) { return _this.category = category; }, function (error) { return _this.errorMessage = error; });
    };
    CategoryInfoComponent.prototype.decodeLink = function () {
        this.url = this.orlp.decodeLink(this.url);
    };
    CategoryInfoComponent.prototype.tabClick = function (id) {
        if (id == 0) {
            this.table1 = true;
            this.table2 = false;
        }
        else {
            this.table2 = true;
            this.table1 = false;
        }
    };
    CategoryInfoComponent.prototype.getLinkForCourses = function () {
        return this.orlp.getShortLink(this.category.courses);
    };
    CategoryInfoComponent.prototype.getLinkForDecks = function () {
        return this.orlp.getShortLink(this.category.decks);
    };
    return CategoryInfoComponent;
}());
CategoryInfoComponent = __decorate([
    core_1.Component({
        template: require('app/page/categoryInfo/categoryInfo.component.html!text'),
        styleUrls: ['app/page/categoryInfo/categoryInfo.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        orlp_service_1.ORLPService,
        categoryInfo_service_1.CategoryInfoService])
], CategoryInfoComponent);
exports.CategoryInfoComponent = CategoryInfoComponent;
//# sourceMappingURL=categoryInfo.component.js.map