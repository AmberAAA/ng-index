import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `
  <div class="body">
      <h3>落霞与孤鹜齐飞，秋水共长天一色。</h3>
  </div>
  `,
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
