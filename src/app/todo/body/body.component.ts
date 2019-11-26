import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {Item} from '../todo.service';

@Component({
  selector: 'app-todo-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(
    private server: TodoService
  ) {}

  public title: string;

  public list: Item[] = [];

  trackByItem(index: number, item: Item): number {
    return item.id;
  }

  save($e) {
    const item: Item = new Item($e.target.value);
    this.server.saveItem(item).subscribe();
    $e.target.value = '';
  }

  ngOnInit() {
    this.server.getListGroup().subscribe(res => {
      console.log(res);
      this.list = res;
    });
  }

}
