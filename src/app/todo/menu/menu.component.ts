import { Component, OnInit } from '@angular/core';
import {TodoService, Title} from '../todo.service';

@Component({
  selector: 'app-todo-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public titles: Title[];

  constructor(
    private service: TodoService
  ) { }

  ngOnInit() {
    this.titles = this.service.getListGroup();
  }

  saveTitle() {}

}
