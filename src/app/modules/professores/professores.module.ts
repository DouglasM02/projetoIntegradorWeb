import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessoresRoutingModule } from './professores-routing.module';
import { ProfessoresListComponent } from './components/professores-list/professores-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaskModule } from 'ngx-mask';
import { CadastrarProfessorComponent } from './components/modals/cadastrar-professor/cadastrar-professor.component';
import { DeletarProfessorComponent } from './components/modals/deletar-professor/deletar-professor.component';
import { EditarProfessorComponent } from './components/modals/editar-professor/editar-professor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfessoresListComponent,
    CadastrarProfessorComponent,
    DeletarProfessorComponent,
    EditarProfessorComponent
  ],
  imports: [
    CommonModule,
    ProfessoresRoutingModule,
    SharedModule,
    MatDialogModule,
    FormsModule,
    NgxMaskModule.forChild()
  ]
})
export class ProfessoresModule { }
