import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalasRoutingModule } from './salas-routing.module';
import { SalasListComponent } from './components/salas-list/salas-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SalasListComponent
  ],
  imports: [
    CommonModule,
    SalasRoutingModule,
    SharedModule
  ]
})
export class SalasModule { }
