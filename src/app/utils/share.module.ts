import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import 'ng-zorro-antd/button/style/index.min.css';
import {NzButtonModule, NzCardModule, NzIconModule, NzLayoutModule, NzMenuModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    NzButtonModule,
    NzLayoutModule,
    NzCardModule,
    NzMenuModule,
    NzIconModule
  ]
})
export class ShareModule { }
