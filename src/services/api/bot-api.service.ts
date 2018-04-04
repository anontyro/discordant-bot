import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Observable } from "rxjs/Observable";

@Injectable()
export class BotApiService {

  constructor(private electronService: ElectronService) { this.onInit(); }

  private asyncMsg = 'async-bot-msg';
  private asyncReply = 'async-bot-reply';

  private onInit(){
    this.electronService.ipcRenderer.on(this.asyncReply, (event, arg) =>{
      console.log(arg);
    });
  }

  public sendAsyncMessage(msg: string) {
    this.electronService.ipcRenderer.send(this.asyncMsg, msg);
  }

}
