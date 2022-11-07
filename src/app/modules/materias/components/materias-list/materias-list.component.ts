import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarMateriaComponent } from '../modals/cadastrar-materia/cadastrar-materia.component';
import { DeletarMateriaComponent } from '../modals/deletar-materia/deletar-materia.component';
import { EditarMateriaComponent } from '../modals/editar-materia/editar-materia.component';

@Component({
  selector: 'app-materias-list',
  templateUrl: './materias-list.component.html',
  styleUrls: ['./materias-list.component.css']
})
export class MateriasListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCadastrar(): void {
    this.dialog.open(CadastrarMateriaComponent,{
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
    this.dialog.open(EditarMateriaComponent,{
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
    this.dialog.open(DeletarMateriaComponent,{
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
