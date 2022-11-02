import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { MateriasListComponent } from './components/materias-list/materias-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MateriasListComponent
  ],
  imports: [
    CommonModule,
    MateriasRoutingModule,
    SharedModule
  ]
})
export class MateriasModule { }
