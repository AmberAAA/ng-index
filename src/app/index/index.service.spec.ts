
import {IndexService, Potery} from './index.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {asyncData} from '../utils';

let httpClientSpy: {get: jasmine.Spy};
let service: IndexService;

describe('IndexService', () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new IndexService(httpClientSpy as any);
  });

  it('应该被创建', () => {
    expect(service).toBeTruthy();
  });

  it('应返回古诗词', () => {
    const poetry: Potery = {
      content : '朔风吹散三更雪，倩魂犹恋桃花月。',
      origin : '菩萨蛮·朔风吹散三更雪',
      author : '纳兰性德',
      category : '古诗文-天气-写雪',
      title: ''
    };
    expect(httpClientSpy.get.calls.count()).toBe(0, '应该只运行了0次');

    httpClientSpy.get.and.returnValue(asyncData(poetry));

    service.getPoetry().subscribe(
      p => expect(p).toEqual(poetry, '应该返回古诗词')
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, '应该只运行了一次');
  });
});
