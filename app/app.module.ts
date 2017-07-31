import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NavbarComponent} from "./page/navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {CabinetModule} from "./page/cabinet/cabinet.module";
import {CategoryInfoModule} from "./page/categoryInfo/categoryInfo.module";
import {SignUpModule} from "./page/signup/signup.module";
import {MainModule} from "./page/main/main.module";
import {LoginModule} from "./page/login/login.module";
import {AdminModule} from "./page/admin/admin.module";
import {CardModule} from "./page/card/card.module";
import {CookieService} from "angular2-cookie/core";
import {ORLPService} from "./orlp.service";
import {StarRatingModule} from "angular-star-rating";
import {LogoutService} from "./page/logout/logout.service";
import {CabinetService} from "./page/cabinet/cabinet.service";
import {NavbarService} from "./page/navbar/navbar.service";
import {DeckService} from "./page/navbar/search/deck.service";
import {DeckFilterPipe} from "./page/navbar/search/deck.filter.pipe";
import {CategoryService} from "./page/navbar/search/category.service";
import {CategoryFilterPipe} from "./page/navbar/search/category.filter.pipe";
import {CourseService} from "./page/navbar/search/course.service";
import {CourseFilterPipe} from "./page/navbar/search/course.filter.pipe";
import {UserModule} from "./page/user/user.module";
import {UserCategoriesService} from "./page/user/categories/user.categories.service";
import {UserCoursesService} from "./page/user/courses/user.courses.service";
import {CourseInfoModule} from "./page/courseInfo/courseInfo.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forRoot([
            {path: '', redirectTo: 'main', pathMatch: 'full'},
            {path: '**', redirectTo: 'main', pathMatch: 'full'}
        ]),

        CategoryInfoModule,
        CourseInfoModule,
        SignUpModule,
        LoginModule,
        MainModule,
        AdminModule,
        CardModule,
        CabinetModule,
        StarRatingModule,
        UserModule
    ],
    exports: [],
    declarations: [
        NavbarComponent,
        CategoryFilterPipe,
        CourseFilterPipe,
        DeckFilterPipe,
    ],

    providers: [ORLPService, CategoryService, CourseService, DeckService, CookieService, LogoutService, NavbarService, CabinetService, UserCategoriesService, UserCoursesService],
    bootstrap: [NavbarComponent]
})
export class AppModule {
}
