import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';
import {RouterModule} from '@angular/router';
import {NzLayoutModule, NzMenuModule} from 'ng-zorro-antd';
import {AppModule} from '../app.module';
import {ShareModule} from '../utils/share.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutComponent ],
      imports: [RouterTestingModule, ShareModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
