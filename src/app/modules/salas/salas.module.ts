import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalasRoutingModule } from './salas-routing.module';
import { SalasListComponent } from './components/salas-list/salas-list.component';
import { SharedModule } from '../shared/shared.module';
import { CadastrarSalaComponent } from './components/modals/cadastrar-sala/cadastrar-sala.component';
import { DeletarSalaComponent } from './components/modals/deletar-sala/deletar-sala.component';
import { EditarSalaComponent } from './components/modals/editar-sala/editar-sala.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


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
    SharedModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forChild()
  ]
})
export class SalasModule { }
