import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProfileService} from './profile.service';
import {UserDetailsDto} from '../../dto/UserDetailsDto';
import {Person} from '../../dto/Person';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordDTO} from '../../dto/PasswordDTO';
import {SERVER_ADDRESS} from '../../services/orlp.settings';

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
  public chosenImage: boolean = false;
  public authenticationType: string;
  public imageProfile: string;
  public showMessageData: boolean = false;
  selectedRegime: string;

  userForm: FormGroup;

  constructor(private profileService: ProfileService, private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
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
        if (user.accountStatus !== 'ACTIVE') {
          this.router.navigate(['/home']);
        }
        this.userProfile = user;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        if (user.imageType === 'BASE64') {
          this.imageProfile = user.self.href + '/image' + '?' + new Date().getTime();
        } else {
          this.imageProfile = user.image;
        }
        this.authenticationType = user.authenticationType;

        this.profileService.getLearningRegime().subscribe(regime => this.selectedRegime = regime);
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
      .subscribe(() => this.showForm = true);
  }

  private deleteProfile() {
    this.profileService.deleteProfile()
      .subscribe(() => this.showModal = true);
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

  updateLearningRegime(regime: string) {
    this.profileService.updateLearningRegime(this.selectedRegime).subscribe(() => this.selectedRegime = regime);
  }
}
