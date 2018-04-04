import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ElectronApiService {

  constructor(private electronService: ElectronService) { this.onInit(); }

  private asyncMsg = 'async-message';
  private asyncReply = 'async-reply';

  private onInit(){
    this.electronService.ipcRenderer.on(this.asyncReply, (event, arg) =>{
      console.log(arg);
    });
  }

  public sendAsyncMessage(msg: string) {
    this.electronService.ipcRenderer.send(this.asyncMsg, msg);
  }

}
