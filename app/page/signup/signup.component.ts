import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {SignupService} from "./signup.service";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "./User";


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
    user: User = new User();
    errorMessage: String;
    success: boolean = false;
    errorUserExists: string;
    error: boolean = false;
    errorEmailExists: string;


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

    register(): void {


        this.user.account.password = this.userForm.value.confirmPassword.password;
        this.user.account.email = this.userForm.value.email;
        this.user.person.firstName = this.userForm.value.firstName;
        this.user.person.lastName = this.userForm.value.lastName;
        console.log(this.user);
        this.signupService.registerUser(this.user)
            .subscribe(() => {
                    this.success = true;
                },
                (response) => this.processError(response));
        console.log(this.user);

    }

    private processError(response) {
        this.success = null;
        if (response.status === 400 && response._body === 'login already in use') {
            this.error = true;
        }

    }

}
