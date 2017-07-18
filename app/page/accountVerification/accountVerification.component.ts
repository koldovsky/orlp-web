import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Http} from "@angular/http";
import {AccountVerificationService} from "./accountVerification.service";


@Component({
    template: `
        <html>
        <head></head>
        <body>
        <div>Hello</div>
        <br/>
        <span>your token = {{token}}</span>
        </body>
        </html>
    `


})
export class AccountVerificationComponent implements OnInit {
    token: string;
    _url: string = "dfse";

    constructor(private accVerify: AccountVerificationService, private http: Http, private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.token = params['token'];
            this.accVerify.accountVerificate(this.token).subscribe((success) => {
                console.log(success);
                (error) => {
                    console.log(error)
                }
            })


            console.log('token= ' + this.token);
            this.router.navigate(['registr']);
        });
    }

    sendTokenToController = () => {
        this.accVerify.accountVerificate(this.token).subscribe((response) => {

        })
    }
}