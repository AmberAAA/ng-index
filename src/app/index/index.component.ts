import { Component, OnInit } from '@angular/core';
import {IndexService} from './index.service';

@Component({
  selector: 'app-index',
  template: `
  <div class="body">
      <img src="https://v1.jinrishici.com/all.svg?font-size=24&spacing=6">
  </div>
  `,
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private server: IndexService
  ) { }

  ngOnInit() {
    this.server.getPoetry();
  }

}
