import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { MateriasListComponent } from './materias-list/materias-list.component';


@NgModule({
  declarations: [
    MateriasListComponent
  ],
  imports: [
    CommonModule,
    MateriasRoutingModule
  ]
})
export class MateriasModule { }
