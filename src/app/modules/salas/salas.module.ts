import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalasRoutingModule } from './salas-routing.module';
import { SalasListComponent } from './components/salas-list/salas-list.component';


@NgModule({
  declarations: [
    SalasListComponent
  ],
  imports: [
    CommonModule,
    SalasRoutingModule
  ]
})
export class SalasModule { }
