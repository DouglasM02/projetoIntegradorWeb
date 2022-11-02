import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosListComponent } from './components/alunos-list/alunos-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AlunosListComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    SharedModule
  ]
})
export class AlunosModule { }
