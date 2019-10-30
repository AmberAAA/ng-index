import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {RouteData} from './utils';


const routes: Routes = [
  { path: '', component: IndexComponent, data: { name: '首页', icon: 'home', show: true} as RouteData }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
