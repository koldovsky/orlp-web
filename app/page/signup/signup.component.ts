import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {SignupService} from "./signup.service";
import {User} from "./User";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({

    template: require('app/page/signup/signup.component.html!text')

})

export class SignUpComponent implements OnInit {
    newUser: User;
    userForm: FormGroup;
    error: string = 'has-danger';

    constructor(private router: Router,
                private signupService: SignupService,
                private fb: FormBuilder) {
        this.newUser = new User();

    }

    ngOnInit() {

        this.userForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(2)]],
        });
    }

    onSubmit({value, valid}: { value: User, valid: boolean }) {
        console.log(value, valid);
    }
}
