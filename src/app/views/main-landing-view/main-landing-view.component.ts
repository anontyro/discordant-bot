import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-main-landing-view',
  templateUrl: './main-landing-view.component.html',
  styleUrls: ['./main-landing-view.component.scss']
})
export class MainLandingViewComponent implements OnInit {

  constructor(private electronService: ElectronService) { }

  ngOnInit() {
  }

  public onButtonPressed() {
    this.electronService.ipcRenderer.send('message','test Message');
  }

}
