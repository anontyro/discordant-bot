import { BotApiService } from './../../../services/api/bot-api.service';
import { ElectronApiService } from './../../../services/api/electron-api.service';
import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-main-landing-view',
  templateUrl: './main-landing-view.component.html',
  styleUrls: ['./main-landing-view.component.scss']
})
export class MainLandingViewComponent implements OnInit {

  public initBot = false;

  constructor(
    private electronApiService: ElectronApiService,
    private botApiService: BotApiService
  ) { }

  ngOnInit() { }

  public onButtonPressed() {
    this.botApiService.sendAsyncMessage('test Message');
  }

  public onBotInitBtn() {
    this.initBot = !this.initBot;

    this.electronBotInit(this.initBot);
  }

  private electronBotInit(startBot: boolean) {
    if(startBot) {
      this.botApiService.sendAsyncMessage('botCreate');
    } else {
      this.botApiService.sendAsyncMessage('botDestroy');

    }
  }

}
