import { Router } from '@angular/router';
import { SignupService } from "./signup.service";
import { SignupAlertService } from "./signup-alert.service";
import { IUser } from "./User";
export declare class SignUpComponent {
    private router;
    private signupService;
    private signupAlert;
    newUser: IUser;
    error: string;
    loading: boolean;
    constructor(router: Router, signupService: SignupService, signupAlert: SignupAlertService);
    register(): void;
}
