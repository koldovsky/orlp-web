import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthorisedComponent} from './authorised.component';
import {AuthorizationUserGuardService} from '../authorization.user.guard.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'authorised', component: AuthorisedComponent},
        ]),
    ],
    exports: [],
    declarations: [
      AuthorisedComponent
    ],
    providers: [AuthorizationUserGuardService],
})
export class AuthorisedModule {
    constructor() { }
}
