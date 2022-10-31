import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessoresRoutingModule } from './professores-routing.module';
import { ProfessoresListComponent } from './components/professores-list/professores-list.component';


@NgModule({
  declarations: [
    ProfessoresListComponent
  ],
  imports: [
    CommonModule,
    ProfessoresRoutingModule
  ]
})
export class ProfessoresModule { }
