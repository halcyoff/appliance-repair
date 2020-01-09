import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ControlDirective} from './directives/control.directive';
import { LoginComponent} from './components/login/login.component';

const angularModules = [
  AppRoutingModule,
  BrowserAnimationsModule,
  BrowserModule,
  HttpClientModule,
  ReactiveFormsModule
];

const components = [
  AppComponent,
  LoginComponent
];

const directives = [
  ControlDirective
];

const services = [];

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatStepperModule,
  MatToolbarModule
];


@NgModule({
  declarations: [
    components,
    directives,
    services
  ],
  imports: [
    angularModules,
    materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
