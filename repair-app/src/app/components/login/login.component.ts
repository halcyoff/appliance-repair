import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usernameFormGroup = new FormGroup({});
  public passwordFormGroup = new FormGroup({});
  public focusField = false;

  constructor() {}

  public ngOnInit(): void {
    this.initFormControls();
    this.setFocusToField();
  }

  public setFocusToField(): void {
    setTimeout(() => {
      this.focusField = false;
      setTimeout(() => {
        this.focusField = true;
      }, 250);
    }, 300);
  }

  public submitOnEnter(): void {

  }

  private initFormControls(): void {
    this.usernameFormGroup.addControl('username', new FormControl('', Validators.required));
    this.passwordFormGroup.addControl('password', new FormControl('', Validators.required));
  }
}
