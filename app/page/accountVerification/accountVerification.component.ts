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
    error: boolean;
    _url: string = "dfse";

    constructor(private accVerify: AccountVerificationService, private http: Http, private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.error = false;
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.token = params['token'];

            this.accVerify.accountVerificate(this.token).subscribe((success) => {
                    console.log(success);
                    //this.router.navigate(['login']);
                },
                (error) => {
                    this.error = true;
                    console.log(error)
                })
            console.log('token= ' + this.token);
            // this.router.navigate(['registr']);
        });
    }


}