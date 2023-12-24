import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../common/material.module';
import { DynamicFormModule } from '../module/dynamic-form/dynamic-form.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    DynamicFormModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
