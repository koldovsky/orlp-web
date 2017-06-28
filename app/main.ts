import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PageModule } from './page.module';
import {enableProdMode} from '@angular/core';
enableProdMode();
const platform = platformBrowserDynamic();
platform.bootstrapModule(PageModule);