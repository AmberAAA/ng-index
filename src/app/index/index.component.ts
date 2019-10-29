import {Component, OnDestroy, OnInit} from '@angular/core';
import {IndexService, Potery} from './index.service';
import { interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-index',
  template: `
  <div class="body">
<!--      <img src="https://v1.jinrishici.com/all.svg?font-size=24&spacing=6">-->
      <div *ngIf="potery">
          <span>{{potery.author}}</span>
          <span>{{potery.content}}</span>
          <span>{{potery.origin}}</span>
      </div>
      <div>测试CI是否可用</div>
      <div style="color: rebeccapurple;">避免频发发布</div>
  </div>
  `,
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {

  public potery: Potery;

  public timer$: Subscription;

  constructor(
    private server: IndexService
  ) { }

  ngOnInit() {
    this.server.getPoetry().subscribe(data => this.potery = data, error => console.error(error));
  }

  ngOnDestroy(): void {
    this.timer$.unsubscribe();
  }

}
