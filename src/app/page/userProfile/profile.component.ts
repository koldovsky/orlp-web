import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProfileService} from './profile.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../authorization/login/login.service';
import {UserStatusChangeService} from '../userStatusChange/user.status.change.service';
import {AuthorizationService} from '../authorization/authorization.service';
import {AccountDTO} from '../../dto/AccountDTO/accountDTO';
import {RememberingLevelDTO} from '../../dto/remembering.level.dto';
import {ProfilePersonalInfoDTO} from '../../dto/UserProfileDTO/ProfilePersonalInfoDTO';
import {ProfileImageDTO} from '../../dto/UserProfileDTO/ProfileImageDTO';
import {ProfilePasswordDTO} from '../../dto/UserProfileDTO/ProfilePasswordDTO';
import {LogoutService} from '../logout/logout.service';
import {SendPointsToFriendDTO} from '../../dto/UserProfileDTO/SendPointsToFriendDTO';
import {MainComponent} from '../main/main.component';
import {MessageDTO} from '../../dto/MessageDTO';

function passwordMatcher(form: AbstractControl) {
  const newPassword = form.get('newPassword').value;
  const confirmPassword = form.get('confirmPassword').value;
  if (newPassword === confirmPassword) {
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
  email: string;
  firstName: string;
  lastName: string;
  emailFrom: string;
  emailTo: string;
  pointsBalance: number;
  pointsTo: number;
  error: boolean;
  success: boolean;
  responseMessage: MessageDTO = new MessageDTO();
  originalFirstName: string;
  originalLastName: string;
  currentPassword: string;
  newPassword: string;
  imageBase64: string;
  authenticationType: string;
  status: string;
  public accountLearningDetail: AccountDTO = new AccountDTO(undefined, undefined, undefined, undefined);
  public lastAccountLearningDetail: AccountDTO = new AccountDTO(undefined, undefined, undefined, undefined);
  savingResultMessage: string;
  isFocused: boolean;
  personalInfoShowSuccessMessage = false;
  passwordShowSuccessMessage = false;
  passwordShowFailMessage = false;
  isAccountDeactivated = false;
  personalInfoForm: FormGroup;
  passwordForm: FormGroup;
  sendForm: FormGroup;
  private EMAIL_MIN_LENGTH = 10;
  private EMAIL_MAX_LENGTH = 50;
  private NAME_MIN_LENGTH = 2;
  private NAME_MAX_LENGTH = 15;
  private NAME_PATTERN = '[^`~!@#$%^&*()\\-_=\\+\\[\\]{};:\'\".>/?,<\|]*';
  private PASSWORD_MIN_LENGTH = 8;
  private PASSWORD_MAX_LENGTH = 20;
  private isAuthorizedAdmin: boolean;

  constructor(private profileService: ProfileService,
              private mainComponent: MainComponent,
              private router: Router,
              private loginService: LoginService,
              private formBuilder: FormBuilder,
              private userStatusChangeService: UserStatusChangeService,
              private authorizationService: AuthorizationService,
              private logoutServise: LogoutService) {
  }

  ngOnInit(): void {
    this.status = sessionStorage.getItem('status');
    this.getProfileData();
    this.getProfile();
    this.isAuthorizedAdmin = this.mainComponent.isAuthorizedAdmin;
    this.pointsBalance = this.mainComponent.userDetails.pointsBalance;

    const nameValidator = [
      Validators.required,
      Validators.minLength(this.NAME_MIN_LENGTH),
      Validators.maxLength(this.NAME_MAX_LENGTH),
      Validators.pattern(this.NAME_PATTERN)
    ];
    const passwordValidator = [
      Validators.required,
      Validators.minLength(this.PASSWORD_MIN_LENGTH),
      Validators.maxLength(this.PASSWORD_MAX_LENGTH)
    ];
    const emailValidator = [
      Validators.required,
      Validators.minLength(this.EMAIL_MIN_LENGTH),
      Validators.maxLength(this.EMAIL_MAX_LENGTH),
      Validators.pattern(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
    ];
    const pointsValidator = [
      Validators.required,
      Validators.pattern(new RegExp('^[1-9][0-9]*$'))
    ];

    this.sendForm = this.formBuilder.group({
      email: ['', emailValidator],
      points: ['', pointsValidator]
    });
    this.personalInfoForm = this.formBuilder.group({
      firstName: ['', nameValidator],
      lastName: ['', nameValidator]
    });
    this.passwordForm = this.formBuilder.group({
      currentPassword: ['', passwordValidator],
      newPassword: ['', passwordValidator],
      confirmPassword: ['']
    }, {validator: passwordMatcher});
  }

  isFormValid(): boolean {
    return this.sendForm.valid;
  }

  updatePersonalData() {
    if (this.isNamesEqualToOriginal()) {
      this.personalInfoShowSuccessMessage = true;
      return;
    }
    const data = new ProfilePersonalInfoDTO(this.firstName, this.lastName);
    this.profileService.updatePersonalInfo(data)
      .subscribe((personalData) => {
        this.firstName = personalData.firstName;
        this.lastName = personalData.lastName;
        this.originalFirstName = this.firstName;
        this.originalLastName = this.lastName;
        this.personalInfoShowSuccessMessage = true;
      });
  }

  cancelChanges() {
    this.firstName = this.originalFirstName;
    this.lastName = this.originalLastName;
    this.personalInfoShowSuccessMessage = false;
  }

  sendPointsToFriend() {
    this.emailFrom = this.email;
    this.profileService.sendPointsToFriend(new SendPointsToFriendDTO(this.emailFrom, this.emailTo, this.pointsTo))
      .subscribe((response) => {
        this.pointsBalance = response.points;
        this.mainComponent.userDetails.pointsBalance = this.pointsBalance;
        this.success = true;
      }, (response) => {
        this.responseMessage = response.json();
        this.success = false;
        this.error = true;
      });
  }

  getProfile(): void {
    this.profileService.getAccountDetails().subscribe(
      accountDTO => {
        this.accountLearningDetail = accountDTO;

        this.lastAccountLearningDetail.cardsNumber = this.accountLearningDetail.cardsNumber;
        this.lastAccountLearningDetail.learningRegime = this.accountLearningDetail.learningRegime;
        this.lastAccountLearningDetail.rememberingLevels = [];
        this.accountLearningDetail.rememberingLevels.forEach((level) => this.lastAccountLearningDetail.rememberingLevels.push(
          new RememberingLevelDTO(level.id, level.orderNumber, level.name, level.numberOfPostponedDays)));
      });
  }

  changePassword() {
    const data = new ProfilePasswordDTO(this.currentPassword, this.newPassword);
    this.profileService.changePassword(data)
      .subscribe(() => {
        this.passwordShowSuccessMessage = true;
        this.passwordShowFailMessage = false;
        this.passwordForm.reset();
      }, () => {
        this.passwordShowFailMessage = true;
        this.passwordShowSuccessMessage = false;
      });
  }

  uploadProfileImage(event) {
    const reader = new FileReader();
    reader.onload = (file: any) => {
      const data = new ProfileImageDTO(file.target.result);
      this.profileService.uploadProfileImage(data)
        .subscribe((imageData) => {
          this.imageBase64 = imageData.imageBase64;
        });
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  deleteProfileImage() {
    this.profileService.deleteProfileImage()
      .subscribe(() => {
        this.imageBase64 = null;
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
    return JSON.stringify(this.accountLearningDetail.rememberingLevels) === JSON.stringify(
      this.lastAccountLearningDetail.rememberingLevels) &&
      this.accountLearningDetail.learningRegime === this.lastAccountLearningDetail.learningRegime &&
      this.accountLearningDetail.cardsNumber === this.lastAccountLearningDetail.cardsNumber;
  }

  deleteProfile() {
    this.profileService.deleteProfile()
      .subscribe(() => {
        this.logoutServise.logout();
        this.authorizationService.emitIsAuthorizedChangeEvent(false);
        this.router.navigate(['user/status/change']);
      });
  }

  saveAccountLearningDetail() {
    if (this.areArraysEqual()) {
      if (!this.savingResultMessage.startsWith(this.FAILURE)) {
        this.savingResultMessage = this.FAILURE;
        this.savingResultMessage += ' You haven\'t not changed anything!';
      }
    } else if (this.validateAccountLDetails()) {
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
      this.savingResultMessage += ' All number should be greater then 0 and ' + 'number of days to postpone for should be ' +
        ' greater than number of days to postpone for in a previous level and less than number of days to' +
        ' postpone for in a next level';
    }
  }

  private getProfileData() {
    this.profileService.getProfileData()
      .subscribe((data) => {
        this.email = data.email;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.originalFirstName = this.firstName;
        this.originalLastName = this.lastName;
        this.imageBase64 = data.imageBase64;
        this.authenticationType = data.authenticationType;
      });
  }

  private isNamesEqualToOriginal(): boolean {
    return (this.firstName === this.originalFirstName) &&
      (this.lastName === this.originalLastName);
  }

  private validateAccountLDetails(): boolean {
    for (let i = 0; i < this.accountLearningDetail.rememberingLevels.length - 1; i++) {
      if (!(this.accountLearningDetail.rememberingLevels[i].numberOfPostponedDays
        < this.accountLearningDetail.rememberingLevels[i + 1].numberOfPostponedDays)
        || !(this.accountLearningDetail.rememberingLevels[i].numberOfPostponedDays > 0)) {
        return false;
      }
    }
    return this.accountLearningDetail.cardsNumber > 0;
  }

  closeAlert(): void {
    this.savingResultMessage = '';
  }

  beforeSend(): void {
    this.emailTo = '';
    this.pointsTo = null;
    this.error = false;
    this.success = false;
  }
}
