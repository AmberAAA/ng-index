import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {RouteData} from './utils';
import {OpenCloseComponent} from './open-close/open-close.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'open', component: OpenCloseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
