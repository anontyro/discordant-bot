
import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { ElectronApiService } from '../../../core/services/api/electron-api.service';
import { BotApiService } from '../../../core/services/api/bot-api.service';

@Component({
  selector: 'app-main-landing-view',
  templateUrl: './main-landing-view.component.html',
  styleUrls: ['./main-landing-view.component.scss']
})
export class MainLandingViewComponent implements OnInit {

  public initBot = false;

  public botName = '';

  constructor(
    private electronApiService: ElectronApiService,
    private botApiService: BotApiService
  ) { }

  ngOnInit() { }

  public onButtonPressed() {
    this.electronApiService.sendAsyncMessage('test Message');
  }

  public onBotInitBtn() {
    this.initBot = !this.initBot;

    this.electronBotInit(this.initBot);
  }

  public onBotNamePress() {
    this.botApiService.setBotName(this.botName);
  }

  private electronBotInit(startBot: boolean) {
    if (startBot) {
      this.botApiService.createBot();
    } else {
      this.botApiService.destroyBoy();

    }
  }

  public setBotUsername(username: string) {
    this.botApiService.setBotName(username);
  }

}
