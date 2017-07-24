import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Http} from "@angular/http";
import {AccountVerificationService} from "./accountVerification.service";


@Component({
    template: ``,
})
export class AccountVerificationComponent implements OnInit {
    token: string;
    error: boolean;
    verificationError: boolean;

    constructor(private accVerify: AccountVerificationService, private http: Http, private router: Router, private activatedRoute: ActivatedRoute) {

        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.token = params['token'];
            console.log('token= ' + this.token);
        });

    }

    ngOnInit() {
        this.error = false;
        this.accVerify.accountVerificate(this.token).subscribe((success) => {
                console.log(success);
                console.log(this.verificationError);
                this.router.navigate(['login']);
            },
            (error) => {
                this.error = true;
                console.log(error);
                this.verificationError = true;
                console.log(this.verificationError);
                this.router.navigate(['registr']);
            })

    }
}