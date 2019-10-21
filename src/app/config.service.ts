import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Config {
  name: string;
  textile: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http: HttpClient
  ) { }

  public getConfig() {
    return this.http.get<Config>('http://192.168.0.0.1:8080/api/test');
  }

  public getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>('http://192.168.0.0.1:8080/api/test', { observe: 'response' });
  }
}
