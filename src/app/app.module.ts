import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LayoutComponent } from './layout/layout.component';
import { TodoModule } from './todo/todo.module';
import {TodoService} from './todo/todo.service';
import { IndexComponent } from './index/index.component';
import {ShareModule} from './utils/share.module';
import { OpenCloseComponent } from './open-close/open-close.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    IndexComponent,
    OpenCloseComponent
  ],
  imports: [
    BrowserModule,
    ShareModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TodoModule,
    AppRoutingModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
