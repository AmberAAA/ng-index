import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(
    private server: TodoService
  ) {}

  public name;

  get list() { return this.server.getItems(); }

  ngOnInit() {
  }

  save() {
    this.server.saveItem({
      id: 123,
      state: 0,
      name: this.name,
      children: []
    });
    this.name = '';
  }

}
