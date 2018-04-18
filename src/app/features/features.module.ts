import { mainRoutes } from './views/main-landing-view/routing/main.route';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLandingViewComponent } from './views/main-landing-view/main-landing-view.component';
import { RouterModule } from '@angular/router';
import { LandingBodyComponent } from './components/landing-body/landing-body.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(mainRoutes),
  ],
  declarations: [
    MainLandingViewComponent,
    LandingBodyComponent,
    TopbarComponent,
    FooterComponent,
  ],
  exports: [
    MainLandingViewComponent,
  ]
})
export class FeaturesModule { }
