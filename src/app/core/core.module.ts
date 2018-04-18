import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotApiService } from './services/api/bot-api.service';
import { ElectronApiService } from './services/api/electron-api.service';
import { DatabaseApiService } from './services/api/database-api.service';
import { AppStateService } from './services/app/app-state.service';
import { AuthorizationService } from './services/auth/authorization.service';
import { MainViewService } from './services/views/main-view.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    BotApiService,
    ElectronApiService,
    DatabaseApiService,
    AppStateService,
    AuthorizationService,
    MainViewService,
  ]
})
export class CoreModule { }
