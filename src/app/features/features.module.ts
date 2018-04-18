import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLandingViewComponent } from './views/main-landing-view/main-landing-view.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    MainLandingViewComponent,
  ],
  exports: [
    MainLandingViewComponent,
  ]
})
export class FeaturesModule { }
