import {Component, OnInit, ElementRef} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { MatStepperNext, MatHorizontalStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usernameFormGroup = new FormGroup({});
  public passwordFormGroup = new FormGroup({});
  public passwordFormControlName = 'password';
  public usernameFormControlName = 'username';
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

  public submitOnEnter(stepper: MatHorizontalStepper): void {
    const isFirstStep = 0 === stepper.selectedIndex;
    if (!isFirstStep && this.validateLogin()) {
      console.log('log in');
    } else {
      stepper.next();
    }
  }

  private initFormControls(): void {
    this.usernameFormGroup.addControl(this.usernameFormControlName, new FormControl('', Validators.required));
    this.passwordFormGroup.addControl(this.passwordFormControlName, new FormControl('', Validators.required));
  }

  private validateLogin(): boolean {
    return this.passwordFormGroup.get(this.passwordFormControlName).valid;
  }
}
