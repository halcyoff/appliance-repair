import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formGroup = new FormGroup({});

  public ngOnInit(): void {
    this.formGroup.addControl('username', new FormControl());
    this.formGroup.addControl('password', new FormControl());
  }

}
