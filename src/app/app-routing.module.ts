import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "alunos", loadChildren: () => import("./modules/alunos/alunos.module").then(a => a.AlunosModule)},
  {path: "professores", loadChildren: () => import("./modules/professores/professores.module").then(p => p.ProfessoresModule)},
  {path: "materias", loadChildren: () => import("./modules/materias/materias.module").then(m => m.MateriasModule)},
  {path: "salas", loadChildren: () => import("./modules/salas/salas.module").then(s => s.SalasModule)},
  {path: "**", redirectTo: "alunos", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
