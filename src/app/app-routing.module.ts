import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "alunos", loadChildren: () => import("./modules/alunos/alunos-routing.module").then(a => a.AlunosRoutingModule)},
  {path: "professores", loadChildren: () => import("./modules/professores/professores-routing.module").then(p => p.ProfessoresRoutingModule)},
  {path: "materias", loadChildren: () => import("./modules/materias/materias-routing.module").then(m => m.MateriasRoutingModule)},
  {path: "salas", loadChildren: () => import("./modules/salas/salas-routing.module").then(s => s.SalasRoutingModule)},
  {path: "**", redirectTo: "alunos", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
