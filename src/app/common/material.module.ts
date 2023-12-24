import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NavigatorComponent } from './navigator.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CardComponent } from './card.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavigatorComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,  
    MatIconModule,
    RouterModule,
    MatCardModule,
    
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatSelectModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatRadioModule,
    MatSidenavModule,
    MatInputModule,
    MatTooltipModule,
    SlickCarouselModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    NavigatorComponent,
    CardComponent
  ]
})
export class MaterialModule { }
