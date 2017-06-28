import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PageComponent } from './page/page.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    exports: [],
    declarations: [PageComponent],
    providers: [],
    bootstrap: [PageComponent]
})
export class PageModule { }
