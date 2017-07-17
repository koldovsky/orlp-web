import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Http} from "@angular/http";
@Component({
    template: `
        <html>
        <head></head>
        <body>
        <div>Hello</div>
        <br/>
        <span>your tiken = {{token}}</span>
        </body>
        </html>
    `


})
export class AccountVerificationComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute, private http: Http, private router: Router) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            let token = params['token'];

            console.log(token);
            this.router.navigate['login'];
        });
    }


}