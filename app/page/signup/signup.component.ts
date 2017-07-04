import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from "./signup.service";
import { SignupAlertService } from "./signup-alert.service";
import {IUser} from "./User";



@Component({

    template: require('app/page/signup/signup.component.html!text')

})

export class SignUpComponent {
    newUser: IUser;
    error: string ='has-danger';
    loading = false;

    

    constructor(
        private router: Router,
        private signupService: SignupService,
        private signupAlert : SignupAlertService) { 

        }

    register() {
        this.loading = true;
        this.signupService.registerUser(this.newUser)
            .subscribe(
                data => {
                    this.signupAlert.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.signupAlert.error(error);
                    this.loading = false;
                });
    }
}

