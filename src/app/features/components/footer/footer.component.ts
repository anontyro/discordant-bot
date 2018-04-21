import { BotStatus } from './../../../../models/BotStatus.Model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppStateService } from '../../../core/services/app/app-state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  public barIsHidden= true;

  constructor(
    private appStateService: AppStateService,
  ) { }

  ngOnInit() {
    this.getListeners();
  }

  private getListeners() {
    this.appStateService.botStatus.subscribe((response: BotStatus) => {
      if (response.isBotOnline) {
        this.barIsHidden = false;
      } else {
        this.barIsHidden = true;
      }
    });
  }



  ngOnDestroy(): void {

  }
}
