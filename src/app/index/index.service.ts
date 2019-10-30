import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export interface Potery {
  content: string;
  author: string;
  origin: string;
  category: string;
  title: string;
}


@Injectable({
  providedIn: 'root'
})
export class IndexService {

  public getPoetry() {
    return this.http.get<Potery>('https://v1.jinrishici.com/all.json');
  }


  constructor(
    private http: HttpClient
  ) { }
}
