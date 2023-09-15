import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {TextFieldModule} from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    CommonModule,
    MatInputModule,
    MatRadioModule,
    TextFieldModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDividerModule
  ],
  exports: [
    MatToolbarModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    TextFieldModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
