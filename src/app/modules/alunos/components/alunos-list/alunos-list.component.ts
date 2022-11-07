import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { CadastrarAlunoComponent } from '../modals/cadastrar-aluno/cadastrar-aluno.component';
import { EditarAlunoComponent } from '../modals/editar-aluno/editar-aluno.component';
import { DeletarAlunoComponent } from '../modals/deletar-aluno/deletar-aluno.component';

@Component({
  selector: 'app-alunos-list',
  templateUrl: './alunos-list.component.html',
  styleUrls: ['./alunos-list.component.css']
})
export class AlunosListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCadastrar(): void {
    this.dialog.open(CadastrarAlunoComponent,{
      width: "500px",
      height: "370px",
      disableClose: true
    })
    .afterClosed()
    .subscribe(response => {
      if(response) {}
    })
  }

  openEditar(): void {
    this.dialog.open(EditarAlunoComponent,{
      width: "500px",
      height: "370px",
      disableClose: true
    })
    .afterClosed()
    .subscribe(response => {
      if(response) {}
    })
  }

  openDeletar(): void {
    this.dialog.open(DeletarAlunoComponent,{
      width: "500px",
      height: "190px",
      disableClose: true
    })
    .afterClosed()
    .subscribe(response => {
      if(response) {}
    })
  }

}
