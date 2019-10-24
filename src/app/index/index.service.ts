import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  public getPoetry() {
    return this.http.get('https://v1.jinrishici.com/all.json');
  }


  constructor(
    private http: HttpClient
  ) { }
}
