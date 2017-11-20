import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProfileService} from './profile.service';
import {UserDetailsDto} from '../../dto/UserDetailsDto';
import {Person} from '../../dto/Person';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordDTO} from '../../dto/PasswordDTO';
import {RememberingLevelDTO} from '../../dto/remembering.level.dto';
import {LoginService} from '../authorization/login/login.service';
import {UserStatusChangeService} from '../userStatusChange/user.status.change.service';
import {AuthorizationService} from '../authorization/authorization.service';
import {LogoutService} from '../logout/logout.service';

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
  public person: Person = new Person();
  public currentPassword: string;
  public newPassword: string;
  public showModal: boolean;
  public chosenImage = false;
  public authenticationType: string;
  public imageProfile: string;
  public showMessageData = false;
  lastSelectedRegime: string;
  public currentPasswordMessage: boolean;
  selectedRegime: string;
  lastCardsNumber: number;
  cardsNumber: number;
  public status: string;
  lastRememberingLevels: RememberingLevelDTO[] = [];
  rememberingLevels: RememberingLevelDTO[] = [];
  savingResultMessage: string;
  isFocused: boolean;
  isAuthorized: boolean;

  userForm: FormGroup;

  constructor(private profileService: ProfileService,
              private router: Router,
              private loginService: LoginService,
              private formBuilder: FormBuilder,
              private userStatusChangeService: UserStatusChangeService,
              private authorizationService: AuthorizationService,
              private logoutService: LogoutService ) {
  }

  ngOnInit(): void {
    this.isAuthorized = this.logoutService.isAuthorized();
    if (!this.isAuthorized) {
      this.router.navigate(['login']);
    }
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
        this.profileService.getRememberingLevels().subscribe(
          (rememberingLevels) => {
            this.rememberingLevels = rememberingLevels;
            this.lastRememberingLevels = [];
            this.rememberingLevels.forEach((level) => this.lastRememberingLevels.push(
              new RememberingLevelDTO(level.levelId, level.orderNumber, level.name, level.numberOfPostponedDays)));
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
        this.currentPasswordMessage = true;
        }, (error) => {
        this.currentPasswordMessage = false;
        });
  }

  private deleteProfile() {
    this.profileService.deleteProfile()
      .subscribe(() => {
        this.authorizationService.emitIsAuthorizedChangeEvent(false);
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
        this.imageProfile = this.userProfile.self.href + '/image' + '?' + new Date().getTime();
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
    this.savingResultMessage = '';
    if (this.cardsNumber !== this.lastCardsNumber) {
      this.saveCardsNumber();
    }
    if (this.selectedRegime !== this.lastSelectedRegime) {
      this.saveLearningRegime();
    }
    if (this.selectedRegime === 'CARDS_POSTPONING_USING_SPACED_REPETITION') {
      this.saveRememberingLevels();
    }
    this.isFocused = true;
  }

  private saveCardsNumber(): void {
    if (this.cardsNumber > 0) {
      this.profileService.updateCardsNumber(this.cardsNumber).subscribe(
        () => {
          this.lastCardsNumber = this.cardsNumber;
          if (!this.savingResultMessage.startsWith(this.FAILURE)) {
            this.savingResultMessage = this.SUCCESS;
          }
        },
        () => {
          this.cardsNumber = this.lastCardsNumber;
          if (!this.savingResultMessage.startsWith(this.FAILURE)) {
            this.savingResultMessage = this.FAILURE;
          }
          this.savingResultMessage += ' Error while saving number of cards in the database.';
        });
    } else {
      this.cardsNumber = this.lastCardsNumber;
      if (!this.savingResultMessage.startsWith(this.FAILURE)) {
        this.savingResultMessage = this.FAILURE;
      }
      this.savingResultMessage += ' Number of cards in one learning session should be greater than 0.';
    }
  }

  private saveLearningRegime(): void {
    this.profileService.updateLearningRegime(this.selectedRegime).subscribe(
      () => {
        this.lastSelectedRegime = this.selectedRegime;
        if (!this.savingResultMessage.startsWith(this.FAILURE)) {
          this.savingResultMessage = this.SUCCESS;
        }
      },
      () => {
        this.selectedRegime = this.lastSelectedRegime;
        if (!this.savingResultMessage.startsWith(this.FAILURE)) {
          this.savingResultMessage = this.FAILURE;
        }
        this.savingResultMessage += ' Error while saving learning regime in the database.';
      }
    );
  }

  private saveRememberingLevels(): void {
    for (const index in this.rememberingLevels) {
      const rememberingLevel = this.rememberingLevels[index];
      if (!rememberingLevel.equals(this.lastRememberingLevels[index])) {
        if (rememberingLevel.numberOfPostponedDays > 0 &&
          !(Number.parseInt(index) > 0 && !(rememberingLevel.numberOfPostponedDays >
            this.rememberingLevels[Number.parseInt(index) - 1].numberOfPostponedDays)) &&
          !(Number.parseInt(index) < this.rememberingLevels.length - 1 && !(rememberingLevel.numberOfPostponedDays <
            this.rememberingLevels[Number.parseInt(index) + 1].numberOfPostponedDays))) {
          this.profileService.updateRememberingLevel(rememberingLevel.levelId,
            rememberingLevel.numberOfPostponedDays).subscribe(
            () => {
              const level = this.rememberingLevels[index];
              this.lastRememberingLevels[index] =
                new RememberingLevelDTO(level.levelId, level.orderNumber, level.name, level.numberOfPostponedDays);
              if (!this.savingResultMessage.startsWith(this.FAILURE)) {
                this.savingResultMessage = this.SUCCESS;
              }
            },
            () => {
              const level = this.lastRememberingLevels[index];
              this.rememberingLevels[index] =
                new RememberingLevelDTO(level.levelId, level.orderNumber, level.name, level.numberOfPostponedDays);
              if (!this.savingResultMessage.startsWith(this.FAILURE)) {
                this.savingResultMessage = this.FAILURE;
              }
              this.savingResultMessage += ' Error while saving number of postponed cards for ' + level.name +
                ' level in the database.';
            });
        } else {
          const level = this.lastRememberingLevels[index];
          this.rememberingLevels[index] =
            new RememberingLevelDTO(level.levelId, level.orderNumber, level.name, level.numberOfPostponedDays);
          if (!this.savingResultMessage.startsWith(this.FAILURE)) {
            this.savingResultMessage = this.FAILURE;
          }
          if (!this.savingResultMessage.includes(' Number of days to postpone for should be greater than 0,' +
              ' greater than number of days to postpone for in a previous level and less than number of days to' +
              ' postpone for in a next level.')) {
            this.savingResultMessage += ' Number of days to postpone for should be greater than 0,' +
              ' greater than number of days to postpone for in a previous level and less than number of days to' +
              ' postpone for in a next level.';
          }
        }
      }
    }
  }

  cancelChangesInLearningRegimeTab(): void {
    this.cardsNumber = this.lastCardsNumber;
    this.selectedRegime = this.lastSelectedRegime;
    this.rememberingLevels = [];
    this.lastRememberingLevels.forEach((level) => this.rememberingLevels.push(
      new RememberingLevelDTO(level.levelId, level.orderNumber, level.name, level.numberOfPostponedDays)));
  }

  ngAfterViewChecked() {
    const element = document.getElementById('save-changes-alert');
    if (element && this.isFocused) {
      element.scrollIntoView();
      this.isFocused = false;
    }
  }

  areArraysEqual(): boolean {
    return this.rememberingLevels.every((v, i) => v.equals(this.lastRememberingLevels[i]));
  }

  closeAlert(): void {
    this.savingResultMessage = '';
  }
}
