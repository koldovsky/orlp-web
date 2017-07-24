import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NavbarModule} from './page/navbar/navbar.module';
import {enableProdMode} from '@angular/core';

enableProdMode();
const platform = platformBrowserDynamic();
platform.bootstrapModule(NavbarModule);