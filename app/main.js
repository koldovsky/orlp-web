"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var navbar_module_1 = require("./navbar.module");
var core_1 = require("@angular/core");
core_1.enableProdMode();
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(navbar_module_1.NavbarModule);
//# sourceMappingURL=main.js.map