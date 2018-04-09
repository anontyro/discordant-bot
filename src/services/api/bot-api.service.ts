import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { BotApiStatics } from './../../data/botApiStatics';

@Injectable()
export class BotApiService {

  public latestBotMsg: string;

  constructor(
    private electronService: ElectronService,
  ) { this.onInit(); }



  private onInit() {
    this.listenForMessagesObservable().subscribe((msg) => {
      this.latestBotMsg = msg;
      this.msgCmd(msg);
    });
  }

  private listenForMessagesObservable(): Observable<any> {
    return Observable.create(observer => {
      this.electronService.ipcRenderer.on(BotApiStatics.message.asyncReply, (event, arg) => {
        if (arg) {
          observer.next(arg);
        } else {
          observer.console.error('no value to save');

        }
      });
    });
  }

  private msgCmd(msg: string) {
    const botMsg = JSON.parse(msg);
    console.log(botMsg);
  }

  public sendAsyncMessage(msg: string) {
    this.electronService.ipcRenderer.send(BotApiStatics.message.asyncMsg, msg);
  }

  public createBot() {
    this.sendAsyncMessage(BotApiStatics.botBasics.createBot);
  }

  public destroyBoy() {
    this.sendAsyncMessage(BotApiStatics.botBasics.destroyBoy);
  }

  public setBotName(username: string) {
    const name = BotApiStatics.botBasics.botName + username;
    console.log('bot name change: ' + name);
    this.sendAsyncMessage(name);
  }

}
