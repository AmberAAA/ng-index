import {Component, Input, OnInit} from '@angular/core';
import {Title} from '../todo.service';

@Component({
  selector: 'app-todo-menu-item',
  template: `
    <li>
      {{item.title}}
    </li>
  `,
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() item: Title;

  constructor() { }

  ngOnInit() {
  }

}
