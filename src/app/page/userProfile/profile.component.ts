import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProfileService} from './profile.service';
import {UserDetailsDto} from '../../dto/UserDetailsDto';
import {Person} from '../../dto/Person';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordDTO} from '../../dto/PasswordDTO';
import {LoginService} from '../authorization/login/login.service';
import {UserStatusChangeService} from '../userStatusChange/user.status.change.service';

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
export class ProfileComponent implements OnInit {

  public userProfile: UserDetailsDto;
  public firstName: string;
  public lastName: string;
  public person: Person = new Person();
  public currentPassword: string;
  public newPassword: string;
  public showForm: boolean;
  public showModal: boolean;
  public chosenImage = false;
  public authenticationType: string;
  public imageProfile: string;
  public showMessageData = false;
  lastSelectedRegime: string;
  public currentPasswordNotMatch = false;
  selectedRegime: string;
  lastCardsNumber: number;
  cardsNumber: number;
  public status: string;

  userForm: FormGroup;

  constructor(private profileService: ProfileService,
              private router: Router,
              private loginService: LoginService,
              private formBuilder: FormBuilder,
              private userStatusChangeService: UserStatusChangeService) {
  }

  ngOnInit(): void {
    this.status = sessionStorage.getItem('status');
    this.getProfile();
    this.userForm = this.formBuilder.group({
      passwordGroup: this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
      }, {validator: passwordMatcher})
    });
  }

  getProfile(): void {
    this.profileService.getUserProfile()
      .subscribe(user => {
        this.userProfile = user;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        if (user.imageType === 'BASE64') {
          this.imageProfile = user.self.href + '/image' + '?' + new Date().getTime();
        } else {
          this.imageProfile = user.image;
        }
        this.authenticationType = user.authenticationType;

        this.profileService.getLearningRegime().subscribe(regime => {
          this.selectedRegime = regime;
          this.lastSelectedRegime = regime;
        });
        this.profileService.getCardsNumber().subscribe(cardsNumber => {
          this.cardsNumber = cardsNumber;
          this.lastCardsNumber = cardsNumber;
        });
      });
  }

  private saveChanges() {
    this.person.firstName = this.firstName;
    this.person.lastName = this.lastName;
    this.profileService.changePersonalData(this.person)
      .subscribe(user => {
        this.showMessageData = true;
      });
  }

  private changePassword() {
    this.newPassword = this.userForm.value.passwordGroup.password;
    this.profileService.changePassword(new PasswordDTO(this.currentPassword, this.newPassword))
      .subscribe(() => {
          this.showForm = true;
        }, (error) => {
        this.currentPasswordNotMatch = true;
        });
  }

  private deleteProfile() {
    this.profileService.deleteProfile()
      .subscribe(() => {
        sessionStorage.setItem('status', 'INACTIVE');
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
        this.imageProfile = this.userProfile.self.href + '/image'  + '?' + new Date().getTime();
      });
  }

  private getStatus() {
    this.loginService.getStatus()
      .subscribe((response) => {
        sessionStorage.setItem('status', 'ACTIVE');
      }, (error) => {
        this.userStatusChangeService.setUserStatus(error.status);
      });
  }

  updateLearningRegime(regime: string): void {
    this.selectedRegime = regime;
  }

  saveChangesInLearningRegimeTab(): void {
    if (this.cardsNumber > 0) {
      this.profileService.updateCardsNumber(this.cardsNumber).subscribe(
        () => this.lastCardsNumber = this.cardsNumber,
        () => this.cardsNumber = this.lastCardsNumber);
    } else {
      this.cardsNumber = this.lastCardsNumber;
    }
    this.profileService.updateLearningRegime(this.selectedRegime).subscribe(
      () => this.lastSelectedRegime = this.selectedRegime,
      () => this.selectedRegime = this.lastSelectedRegime);
  }

  cancelChangesInLearningRegimeTab(): void {
    this.cardsNumber = this.lastCardsNumber;
    this.selectedRegime = this.lastSelectedRegime;
  }
}
