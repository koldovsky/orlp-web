"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var page_module_1 = require("./page.module");
var core_1 = require("@angular/core");
core_1.enableProdMode();
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(page_module_1.PageModule);
//# sourceMappingURL=main.js.map