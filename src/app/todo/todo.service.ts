import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Title {
  title: string;
  id: string;
}

export class Item {
  name: string;
  id: number;
  state: number;
  children: {
    name: string,
    state: string,
    id: number,
  }[];
}

const TITLES: Title[] = [
  { title: '标题1', id: '1' },
  { title: '标题2', id: '2' },
  { title: '标题3', id: '3' },
  { title: '标题4', id: '4' },
  { title: '标题5', id: '5' },
];

const Items: Item[] = [];


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  getListGroup(): Title[] {
    return TITLES;
  }

  saveItem(item: Item) {
    Items.push(item);
  }

  getItems(): Item[] {
    return Items;
  }
}
