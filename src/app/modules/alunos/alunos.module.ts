import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosListComponent } from './components/alunos-list/alunos-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CadastrarAlunoComponent } from './components/modals/cadastrar-aluno/cadastrar-aluno.component';
import { DeletarAlunoComponent } from './components/modals/deletar-aluno/deletar-aluno.component';
import { EditarAlunoComponent } from './components/modals/editar-aluno/editar-aluno.component';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AlunosListComponent,
    CadastrarAlunoComponent,
    DeletarAlunoComponent,
    EditarAlunoComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    SharedModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forChild()
  ]
})
export class AlunosModule { }
