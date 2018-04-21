import { BotStatus } from './../../../../models/BotStatus.Model';
import { AppStateService } from './../../../core/services/app/app-state.service';
import { Component, OnInit } from '@angular/core';
import { BotApiService } from '../../../core/services/api/bot-api.service';
import { ElectronApiService } from '../../../core/services/api/electron-api.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  public initBot = false;

  public quickSelection: any;

  constructor(
    private electronApiService: ElectronApiService,
    private botApiService: BotApiService,
    private appStateService: AppStateService,
  ) { }

  ngOnInit() {
  }

  public onQuickSelectChange(event) {
    console.log(event);
  }

  public onBotInitBtn() {
    this.initBot = !this.initBot;

    this.electronBotInit(this.initBot);
  }

  private electronBotInit(startBot: boolean) {
    if (startBot) {
      this.botApiService.createBot();
      this.changeBotState(startBot);
    } else {
      this.botApiService.destroyBoy();
      this.changeBotState(startBot);
    }
  }

  private changeBotState(isOnline: boolean) {
    const status: BotStatus = {
      isBotOnline : isOnline,
      botName: ''
    };
    this.appStateService.setBotStatus(status);
  }

}
