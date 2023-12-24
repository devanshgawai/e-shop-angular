import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/common/material.module';
import { DynamicFormComponent } from './dynamic-form.component';



@NgModule({
  declarations: [
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
