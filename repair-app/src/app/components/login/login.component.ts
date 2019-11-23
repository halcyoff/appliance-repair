import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formGroup = new FormGroup({});
  public focusUsername = false;

  constructor() {}

  public ngOnInit(): void {
    this.initFormControls();
    this.setFocusUsername();
  }

  private initFormControls(): void {
    this.formGroup.addControl('username', new FormControl());
    this.formGroup.addControl('password', new FormControl());
  }

  private setFocusUsername(): void {
    setTimeout(() => {
      this.focusUsername = true;
    }, 500);
  }
}
