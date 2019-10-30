import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {RouteData} from '../utils';


const routes: Routes = [
  { path: 'todo', component: LayoutComponent, data:  { name: 'TODO', show: false, icon: 'home'} as RouteData }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
