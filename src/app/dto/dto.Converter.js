"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var top_category_DTO_1 = require("./CategoryDTO/top.category.DTO");
var link_1 = require("./link");
var link_category_DTO_1 = require("./CategoryDTO/link.category.DTO");
var public_deck_DTO_1 = require("./DeckDTO/public.deck.DTO");
var public_course_DTO_1 = require("./CourseDTO/public.course.DTO");
var public_categories_1 = require("./CategoryDTO/public.categories");
var top_course_DTO_1 = require("./CourseDTO/top.course.DTO");
var linkByCategory_deck_DTO_1 = require("./DeckDTO/linkByCategory.deck.DTO");
var public_card_DTO_1 = require("./CardsDTO/public.card.DTO");
var admin_users_DTO_1 = require("./admin.users.DTO");
var UserDTO_1 = require("./UserDTO/UserDTO");
var link_course_DTO_1 = require("./CourseDTO/link.course.DTO");
var UserDetailsDto_1 = require("./UserDetailsDto");
var linkByFolder_deck_DTO_1 = require("./DeckDTO/linkByFolder.deck.DTO");
var DTOConverter = (function () {
    function DTOConverter() {
    }
    DTOConverter.jsonToPublicCards = function (data) {
        var self = DTOConverter.jsonToLink("self", data._links.self);
        return new public_card_DTO_1.CardPublic(data.answer, data.question, self);
    };
    DTOConverter.jsonToUserDTO = function (data) {
        var self = DTOConverter.jsonToLink("self", data._links.self);
        var folder = DTOConverter.jsonToLink("folder", data._links.folder);
        return new UserDTO_1.UsersDTO(data.firstName, data.lastName, data.email, self, folder);
    };
    DTOConverter.jsonToPublicLinkCourse = function (data) {
        var self = DTOConverter.jsonToLink("self", data._links.self);
        var decks = DTOConverter.jsonToLink("decks", data._links.decks);
        return new link_course_DTO_1.CourseLink(data.name, data.description, data.imagebase64, self, decks);
    };
    DTOConverter.jsonToDeckLinkByFolder = function (data) {
        var self = DTOConverter.jsonToLink("self", data._links.self);
        var cards = DTOConverter.jsonToLink("cards", data._links.cards);
        return new linkByFolder_deck_DTO_1.DeckLinkByFolder(data.name, data.description, self, cards);
    };
    DTOConverter.jsonToPublicCourse = function (data) {
        var self = DTOConverter.jsonToLink("self", data._links.self);
        return new public_course_DTO_1.CoursePublic(data.name, data.description, data.imagebase64, self);
    };
    DTOConverter.jsonToPublicDeck = function (data) {
        var self = DTOConverter.jsonToLink("self", data._links.self);
        return new public_deck_DTO_1.DeckPublic(data.name, data.description, data.rating, self);
    };
    DTOConverter.jsonToDeckLinkByCategory = function (data) {
        var self = DTOConverter.jsonToLink("self", data._links.self);
        var cards = DTOConverter.jsonToLink("cards", data._links.cards);
        return new linkByCategory_deck_DTO_1.DeckLinkByCategory(data.name, data.description, self, cards, data.deckId);
    };
    DTOConverter.jsonToTopCategory = function (data) {
        var self = DTOConverter.jsonToLink("self", data._links.self);
        return new top_category_DTO_1.CategoryTop(data.name, data.imagebase64, self);
    };
    DTOConverter.jsonToTopCourse = function (data) {
        var self = DTOConverter.jsonToLink("self", data._links.self);
        return new top_course_DTO_1.CourseTop(data.name, data.imagebase64, self);
    };
    DTOConverter.jsonToPublicCategories = function (data) {
        var self = DTOConverter.jsonToLink("self", data._links.self);
        return new public_categories_1.CategoriesPublic(data.name, data.description, data.imagebase64, self);
    };
    DTOConverter.jsonToPublicCategory = function (data) {
        var self = DTOConverter.jsonToLink("self", data._links.self);
        var courses = DTOConverter.jsonToLink("courses", data._links.courses);
        var decks = DTOConverter.jsonToLink("decks", data._links.decks);
        return new link_category_DTO_1.CategoryLink(data.name, data.description, data.imagebase64, self, decks, courses);
    };
    DTOConverter.jsonToAdminUsers = function (data) {
        var self = DTOConverter.jsonToLink("self", data._links.self);
        return new admin_users_DTO_1.AdminUsers(data.firstName, data.lastName, data.email, data.accountStatus, self);
    };
    DTOConverter.jsonToUserDetails = function (data) {
        var self = DTOConverter.jsonToLink("self", data._links.self);
        return new UserDetailsDto_1.UserDetailsDto(data.firstName, data.lastName, data.email, data.authorities, self);
    };
    DTOConverter.jsonToLink = function (rel, data) {
        return new link_1.Link(rel, data.href);
    };
    DTOConverter.jsonArrayToCollection = function (callback, data) {
        var array = [];
        data.forEach(function (element) {
            array.push(callback(element));
        });
        return array;
    };
    return DTOConverter;
}());
exports.DTOConverter = DTOConverter;
//# sourceMappingURL=dto.Converter.js.map