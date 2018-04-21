import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
  ]
})
export class MaterialDesignModule { }
