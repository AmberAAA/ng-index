import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

let httpClientSpy: { get: jasmine.Spy };
let todoService: TodoService;


describe('TodoService', () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    todoService = new TodoService(httpClientSpy as any);
  });

  it('可以被创建', () => {
    expect(todoService).toBeTruthy();
  });
});
