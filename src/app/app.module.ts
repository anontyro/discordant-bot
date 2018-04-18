import { RoutingModule } from './routing/routing.module';
import { FeaturesModule } from './features/features.module';
// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// third party
import {NgxElectronModule} from 'ngx-electron';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';


// Services
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BotApiService } from './core/services/api/bot-api.service';
import { DatabaseApiService } from './core/services/api/database-api.service';
import { ElectronApiService } from './core/services/api/electron-api.service';
import { AppStateService } from './core/services/app/app-state.service';
import { AuthorizationService } from './core/services/auth/authorization.service';
import { MainViewService } from './core/services/views/main-view.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    CoreModule,
    FeaturesModule,
    RoutingModule,
    SharedModule,
    NgbModule.forRoot(),
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
