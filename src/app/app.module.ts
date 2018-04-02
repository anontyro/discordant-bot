// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// third party
import {NgxElectronModule} from 'ngx-electron';

// Components
import { AppComponent } from './app.component';
import { MainLandingViewComponent } from './views/main-landing-view/main-landing-view.component';

// Services
import {BotApiService} from '../services/api/bot-api.service';
import {DatabaseApiService} from '../services/api/database-api.service';
import {ElectronApiService} from '../services/api/electron-api.service';
import { AppStateService } from '../services/app/app-state.service';
import { MainViewService } from '../services/views/main-view.service';
import { AuthorizationService } from './../services/auth/authorization.service';

import {AppRoutes} from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    MainLandingViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    NgxElectronModule
  ],
  providers: [
    BotApiService,
    DatabaseApiService,
    ElectronApiService,
    AppStateService,
    AuthorizationService,
    MainViewService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
