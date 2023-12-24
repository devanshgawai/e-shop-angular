import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { DynamicFormModule } from '../module/dynamic-form/dynamic-form.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    DynamicFormModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
