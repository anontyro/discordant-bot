import { BotStatus } from './../../../../models/BotStatus.Model';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Injectable()
export class AppStateService {

  public botStatus: any = new ReplaySubject(1);

  constructor() { }


  public setBotStatus(bot: BotStatus) {
    this.botStatus.next(bot);
  }

}
