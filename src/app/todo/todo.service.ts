import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class Title {
  title: string;
  id: string;
}

export class Item {
  title: string;
  id: number;
  state: number;
  children: {
    title: string,
    state: string,
    id: number,
  }[];

  constructor(title) {
    this.title = title;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  getListGroup(): Observable<Item[]>  {
    return this.http.get<Item[]>('/api/todo');
  }

  saveItem(item: Item) {
    return this.http.post('/api/todo', item);
  }
}
