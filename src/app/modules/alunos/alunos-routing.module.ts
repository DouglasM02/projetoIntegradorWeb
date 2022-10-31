import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosListComponent } from './components/alunos-list/alunos-list.component';

const routes: Routes = [
  {path: "", component:AlunosListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
