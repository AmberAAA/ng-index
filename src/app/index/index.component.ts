import {Component, OnDestroy, OnInit} from '@angular/core';
import {IndexService, Potery} from './index.service';
import {hiddenShow} from '../animations';

@Component({
  selector: 'app-index',
  animations: [
    hiddenShow
  ],
  template: `
  <div class="body">
      <nz-card
              [nzLoading]="load"
              [@hiddenShow]="load ? 'hidden' : 'show'"
              (click)="isShow = !isShow"
              style="min-width: 250px; position: relative; min-height: 150px;"
              [nzTitle]="potery && potery.title">
          <p style="padding: 30px 60px;">{{potery && potery.content}}</p>
      </nz-card>
  </div>
  `,
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {

  public potery: Potery;

  public isShow = false;

  public get load() { return !this.potery; }

  constructor(
    private server: IndexService
  ) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.server.getPoetry().subscribe(data => { this.potery = data; this.potery.title = `《${data.origin}》-${data.author}`; }, error => console.error(error));
  }

  ngOnDestroy(): void {
  }

}
