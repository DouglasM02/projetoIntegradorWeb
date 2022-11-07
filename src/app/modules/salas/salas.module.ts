import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalasRoutingModule } from './salas-routing.module';
import { SalasListComponent } from './components/salas-list/salas-list.component';
import { SharedModule } from '../shared/shared.module';
import { CadastrarSalaComponent } from './components/modals/cadastrar-sala/cadastrar-sala.component';
import { DeletarSalaComponent } from './components/modals/deletar-sala/deletar-sala.component';
import { EditarSalaComponent } from './components/modals/editar-sala/editar-sala.component';


@NgModule({
  declarations: [
    SalasListComponent,
    CadastrarSalaComponent,
    DeletarSalaComponent,
    EditarSalaComponent
  ],
  imports: [
    CommonModule,
    SalasRoutingModule,
    SharedModule
  ]
})
export class SalasModule { }
