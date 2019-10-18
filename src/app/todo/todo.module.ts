import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { DetailComponent } from './detail/detail.component';
import {FormsModule} from '@angular/forms';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule
  ],
  declarations: [LayoutComponent, MenuComponent, BodyComponent, DetailComponent, MenuItemComponent]
})
export class TodoModule { }
