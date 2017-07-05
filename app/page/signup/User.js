"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Account_1 = require("./Account");
var User = (function () {
    function User() {
        this.person = new Person_1.Person();
        this.account = new Account_1.Account;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map