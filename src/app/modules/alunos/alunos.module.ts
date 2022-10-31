import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosListComponent } from './components/alunos-list/alunos-list.component';


@NgModule({
  declarations: [
    AlunosListComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule
  ]
})
export class AlunosModule { }
