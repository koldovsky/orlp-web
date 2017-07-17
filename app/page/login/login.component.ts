import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";


@Component({
    template: require('app/page/login/login.component.html!text')
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    errorMessage: String;
    success: boolean;
    error: boolean;

    constructor(private fb: FormBuilder, private loginService: LoginService) {
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            password: ['', [Validators.required]],
            username: ['', [Validators.required]],
        })
    }

    userLogin(): void {
        this.error = false;
        this.success = false;
        this.loginService.login(this.loginForm.value)
            .subscribe(() =>{console.log(this.loginForm.value)},
                (response) => this.processError(response));
    }

    private processError(response) {
        console.log("status ="+response.status,"body ="+ response.body);
        console.log(response.headers);
        if (response.status === 200) {
            this.success = true;
            console.log(1)
        }
    }
}




