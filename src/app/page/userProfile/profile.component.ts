import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProfileService} from './profile.service';
import {UserDetailsDto} from '../../dto/UserDetailsDto';
import {Person} from '../../dto/Person';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordDTO} from '../../dto/PasswordDTO';
import {LoginService} from '../authorization/login/login.service';
import {UserStatusChangeService} from '../userStatusChange/user.status.change.service';
import {AuthorizationService} from '../authorization/authorization.service';
import {AccountDTO} from "../../dto/AccountDTO/accountDTO";
import {RememberingLevelDTO} from "../../dto/remembering.level.dto";
import {LogoutService} from "../logout/logout.service";

function passwordMatcher(c: AbstractControl) {
  const passwordControl = c.get('password');
  const confirmPassword = c.get('confirmPassword');
  if (passwordControl.value === confirmPassword.value) {
    return null;
  }
  return {'match': true};
}

@Component({
  providers: [ProfileService],
  templateUrl: ('./profile.component.html'),
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewChecked {
  SUCCESS = 'Your changes have been successfully saved!';
  FAILURE = 'Some of your changes haven\'t been saved!';
  public userProfile: UserDetailsDto;
  public firstName: string;
  public lastName: string;
  public originalFirstName: string;
  public originalLastName: string;
  public person: Person = new Person();
  public currentPassword: string;
  public newPassword: string;
  public showModal: boolean;
  public chosenImage = false;
  public authenticationType: string;
  public imageProfile: string;
  public showMessageData = false;
  public currentPasswordMessage: boolean;

  public accountLearningDetail: AccountDTO = new AccountDTO(undefined,undefined,undefined,undefined);
  public lastAccountLearningDetail: AccountDTO = new AccountDTO(undefined,undefined,undefined,undefined);

  public status: string;
  savingResultMessage: string;
  isFocused: boolean;

  userForm: FormGroup;

  constructor(private profileService: ProfileService,
              private router: Router,
              private loginService: LoginService,
              private formBuilder: FormBuilder,
              private userStatusChangeService: UserStatusChangeService,
              private authorizationService: AuthorizationService,
              private logoutServise: LogoutService) {
  }

  ngOnInit(): void {
    this.getProfile();
    this.status = sessionStorage.getItem('status');

    this.userForm = this.formBuilder.group({
      passwordGroup: this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
      }, {validator: passwordMatcher})
    });
  }

  getProfile(): void {
    this.profileService.getAccountDetails().subscribe(

      accountDTO => {
        this.accountLearningDetail=accountDTO;

        this.lastAccountLearningDetail.cardsNumber = this.accountLearningDetail.cardsNumber;
        this.lastAccountLearningDetail.learningRegime = this.accountLearningDetail.learningRegime;
             this.lastAccountLearningDetail.rememberingLevels = [];
             this.accountLearningDetail.rememberingLevels.forEach((level) => this.lastAccountLearningDetail.rememberingLevels.push(
               new RememberingLevelDTO(level.id, level.orderNumber, level.name, level.numberOfPostponedDays)));
      });

    this.profileService.getUserProfile()
      .subscribe(
        user => {
        this.userProfile = user;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.originalFirstName = user.firstName;
        this.originalLastName = user.lastName;
        if (user.imageType === 'BASE64') {
          this.imageProfile = user.self.href + '/image' + '?' + new Date().getTime();
        } else {
          this.imageProfile = user.image;
        }
        this.authenticationType = user.authenticationType;
      });
  }

  private saveChanges() {
    this.person.firstName = this.firstName;
    this.person.lastName = this.lastName;
    this.originalFirstName = this.firstName;
    this.originalLastName = this.lastName;
    this.profileService.changePersonalData(this.person)
      .subscribe(user => {
        this.showMessageData = true;
      });
  }

  private changePassword() {
    this.newPassword = this.userForm.value.passwordGroup.password;
    this.profileService.changePassword(new PasswordDTO(this.currentPassword, this.newPassword))
      .subscribe(() => {
        this.currentPasswordMessage = true;
      }, (error) => {
        this.currentPasswordMessage = false;
      });
  }

  private deleteProfile() {
    this.profileService.deleteProfile()
      .subscribe(() => {
        this.logoutServise.logout();
        this.authorizationService.emitIsAuthorizedChangeEvent(false);
        this.router.navigate(['user/status/change']);
      });
  }

  loadFile(fileInput: any) {
    const file = fileInput.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    this.profileService.addImage(formData)
      .subscribe(() => {
        this.chosenImage = true;
        this.imageProfile = this.userProfile.self.href + '/image' + '?' + new Date().getTime();
      });
  }

  updateLearningRegime(regime: string): void {
    this.accountLearningDetail.learningRegime = regime;
  }

  saveChangesInLearningRegimeTab(): void {
    this.savingResultMessage = '';
      this.saveAccountLearningDetail();
    this.isFocused = true;
  }

  cancelChangesInLearningRegimeTab(): void {
    this.accountLearningDetail.learningRegime = this.lastAccountLearningDetail.learningRegime;
    this.accountLearningDetail.cardsNumber = this.lastAccountLearningDetail.cardsNumber;

    this.accountLearningDetail.rememberingLevels = [];
      this.lastAccountLearningDetail.rememberingLevels.forEach((level) => this.accountLearningDetail.rememberingLevels.push(
        new RememberingLevelDTO(level.id, level.orderNumber, level.name, level.numberOfPostponedDays)));
  }


  ngAfterViewChecked() {
    const element = document.getElementById('save-changes-alert');
    if (element && this.isFocused) {
      element.scrollIntoView();
      this.isFocused = false;
    }
  }

  areArraysEqual(): boolean {
    return JSON.stringify(this.accountLearningDetail.rememberingLevels) === JSON.stringify(this.lastAccountLearningDetail.rememberingLevels) &&
      this.accountLearningDetail.learningRegime===this.lastAccountLearningDetail.learningRegime &&
      this.accountLearningDetail.cardsNumber===this.lastAccountLearningDetail.cardsNumber ;
  }

  closeAlert(): void {
    this.savingResultMessage = '';
  }

  public cancelChanges() {
    this.firstName = this.originalFirstName;
    this.lastName = this.originalLastName;
  }

  saveAccountLearningDetail() {
    if(this.areArraysEqual()){
      if (!this.savingResultMessage.startsWith(this.FAILURE)) {
        this.savingResultMessage = this.FAILURE;
        this.savingResultMessage += ' You haven\'t not changed anything!';
      }
    }else
    if (this.validateAccountLDetails()) {
      this.profileService.updateUserProfile(this.accountLearningDetail).subscribe(
        () => {
          this.lastAccountLearningDetail.learningRegime = this.accountLearningDetail.learningRegime;
          this.lastAccountLearningDetail.cardsNumber = this.accountLearningDetail.cardsNumber;
          this.lastAccountLearningDetail.rememberingLevels = [];
          this.accountLearningDetail.rememberingLevels.forEach((level) => this.lastAccountLearningDetail.rememberingLevels.push(
            new RememberingLevelDTO(level.id, level.orderNumber, level.name, level.numberOfPostponedDays)));


          if (!this.savingResultMessage.startsWith(this.FAILURE)) {
            this.savingResultMessage = this.SUCCESS;
          }
        },
        () => {
          this.cancelChangesInLearningRegimeTab();
          if (!this.savingResultMessage.startsWith(this.FAILURE)) {
            this.savingResultMessage = this.FAILURE;
          }
          this.savingResultMessage += ' Error while saving account details in the database.';
        });
    } else {
      this.cancelChangesInLearningRegimeTab();
      if (!this.savingResultMessage.startsWith(this.FAILURE)) {
        this.savingResultMessage = this.FAILURE;
      }
      this.savingResultMessage += ' All number should be greater then 0 and '+ 'number of days to postpone for should be '+
        ' greater than number of days to postpone for in a previous level and less than number of days to' +
                  ' postpone for in a next level';
    }
  }

  private validateAccountLDetails(): boolean {
    for(let i=0;i<this.accountLearningDetail.rememberingLevels.length-1;i++){
      if(!(this.accountLearningDetail.rememberingLevels[i].numberOfPostponedDays<this.accountLearningDetail.rememberingLevels[i + 1].numberOfPostponedDays)
      || !(this.accountLearningDetail.rememberingLevels[i].numberOfPostponedDays>0)){
      return false;
      }
    }
    return this.accountLearningDetail.cardsNumber > 0;
  }
}
