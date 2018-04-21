import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  public quickSelection: any;

  constructor() { }

  ngOnInit() {
  }

  public onQuickSelectChange(event) {
    console.log(event);
  }

}
