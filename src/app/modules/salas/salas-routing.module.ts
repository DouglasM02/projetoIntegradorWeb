import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalasListComponent } from './components/salas-list/salas-list.component';

const routes: Routes = [
  { path: "", component:SalasListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalasRoutingModule { }
