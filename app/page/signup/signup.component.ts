import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {SignupService} from "./signup.service";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Person} from "./Person";
import {Account} from "./Account";


function passwordMatcher(c: AbstractControl) {
    let passwordControl = c.get('password');
    let confirmPassword = c.get('confirmPassword');
    if (passwordControl.value === confirmPassword.value) {
        return null;
    }
    return {'match': true};
}

@Component({

    template: require('app/page/signup/signup.component.html!text')

})

export class SignUpComponent implements OnInit {
    userForm: FormGroup;
    person = new Person();
    account = new Account();


    constructor(private router: Router,
                private signupService: SignupService,
                private formBuilder: FormBuilder) {


    }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]"), Validators.required]],
            passwordGroup: this.formBuilder.group({
                password: ['', [Validators.required, Validators.minLength(5)]],
                confirmPassword: ['', [Validators.required]],
            }, {validator: passwordMatcher})
        })
    };

}
