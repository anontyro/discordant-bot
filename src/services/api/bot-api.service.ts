import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class BotApiService {

  constructor(private electronService: ElectronService) { this.onInit(); }

  private asyncMsg = 'async-bot-msg';
  private asyncReply = 'async-bot-reply';

  private onInit(){
    this.listenForMessagesObservable().subscribe((msg) =>{
      console.log(msg);
    })
  }
  
  private listenForMessagesObservable(): Observable<any> {
    return Observable.create(observer =>{
      this.electronService.ipcRenderer.on(this.asyncReply, (event, arg)=>{
        if(arg) {
          observer.next(arg);
        } else{
          observer.console.error('no value to save');
          
        }
      })
    });
  }

  public sendAsyncMessage(msg: string) {
    this.electronService.ipcRenderer.send(this.asyncMsg, msg);
  }

}
