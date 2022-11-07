import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { MateriasListComponent } from './components/materias-list/materias-list.component';
import { SharedModule } from '../shared/shared.module';
import { CadastrarMateriaComponent } from './components/modals/cadastrar-materia/cadastrar-materia.component';
import { DeletarMateriaComponent } from './components/modals/deletar-materia/deletar-materia.component';
import { EditarMateriaComponent } from './components/modals/editar-materia/editar-materia.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    MateriasListComponent,
    CadastrarMateriaComponent,
    DeletarMateriaComponent,
    EditarMateriaComponent
  ],
  imports: [
    CommonModule,
    MateriasRoutingModule,
    SharedModule,
    MatDialogModule,
    NgxMaskModule.forChild()
  ]
})
export class MateriasModule { }
