import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarProfessorComponent } from '../modals/cadastrar-professor/cadastrar-professor.component';
import { DeletarProfessorComponent } from '../modals/deletar-professor/deletar-professor.component';
import { EditarProfessorComponent } from '../modals/editar-professor/editar-professor.component';

@Component({
  selector: 'app-professores-list',
  templateUrl: './professores-list.component.html',
  styleUrls: ['./professores-list.component.css']
})
export class ProfessoresListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCadastrar(): void {
    this.dialog.open(CadastrarProfessorComponent,{
      width: "500px",
      height: "430px",
      disableClose: true
    })
    .afterClosed()
    .subscribe(response => {
      if(response) {}
    })
  }

  openEditar(): void {
    this.dialog.open(EditarProfessorComponent,{
      width: "500px",
      height: "430px",
      disableClose: true
    })
    .afterClosed()
    .subscribe(response => {
      if(response) {}
    })
  }

  openDeletar(): void {
    this.dialog.open(DeletarProfessorComponent,{
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
