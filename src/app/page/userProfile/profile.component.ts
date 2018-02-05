import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProfileService} from './profile.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../authorization/login/login.service';
import {UserStatusChangeService} from '../userStatusChange/user.status.change.service';
import {AuthorizationService} from '../authorization/authorization.service';
import {ProfilePersonalInfoDTO} from '../../dto/UserProfileDTO/ProfilePersonalInfoDTO';
import {ProfileImageDTO} from '../../dto/UserProfileDTO/ProfileImageDTO';
import {ProfilePasswordDTO} from '../../dto/UserProfileDTO/ProfilePasswordDTO';

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

export class ProfileComponent implements OnInit {
  private NAME_MIN_LENGTH = 2;
  private NAME_MAX_LENGTH = 15;
  private NAME_PATTERN = '[^`~!@#$%^&*()\\-_=\\+\\[\\]{};:\'\".>/?,<\|]*';
  private PASSWORD_MIN_LENGTH = 8;
  private PASSWORD_MAX_LENGTH = 20;

  email: string;
  firstName: string;
  lastName: string;
  originalFirstName: string;
  originalLastName: string;
  currentPassword: string;
  newPassword: string;
  imageBase64: string;
  authenticationType: string;
  status: string;

  personalInfoShowSuccessMessage = false;
  passwordShowSuccessMessage = false;
  passwordShowFailMessage = false;
  isAccountDeactivated = false;

  personalInfoForm: FormGroup;
  passwordForm: FormGroup;

  constructor(private profileService: ProfileService,
              private router: Router,
              private loginService: LoginService,
              private formBuilder: FormBuilder,
              private userStatusChangeService: UserStatusChangeService,
              private authorizationService: AuthorizationService) {
  }

  ngOnInit(): void {
    this.status = sessionStorage.getItem('status');
    this.getProfileData();

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

    this.personalInfoForm = this.formBuilder.group({
      firstName: ['', nameValidator],
      lastName: ['', nameValidator]
    });
    this.passwordForm = this.formBuilder.group({
      currentPassword: ['', passwordValidator],
      newPassword: ['', passwordValidator],
      confirmPassword: ['', passwordValidator]
    }, {validator: passwordMatcher});
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

  deleteProfile() {
    this.profileService.deleteProfile()
      .subscribe(() => {
        this.authorizationService.emitIsAuthorizedChangeEvent(false);
        sessionStorage.setItem('status', 'DELETED');
      this.router.navigate(['home']);
    });
  }

  private isNamesEqualToOriginal(): boolean {
    return (this.firstName === this.originalFirstName) &&
      (this.lastName === this.originalLastName);
  }
}
