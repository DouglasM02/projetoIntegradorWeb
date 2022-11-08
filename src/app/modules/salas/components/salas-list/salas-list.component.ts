import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarSalaComponent } from '../modals/cadastrar-sala/cadastrar-sala.component';
import { DeletarSalaComponent } from '../modals/deletar-sala/deletar-sala.component';
import { EditarSalaComponent } from '../modals/editar-sala/editar-sala.component';

@Component({
  selector: 'app-salas-list',
  templateUrl: './salas-list.component.html',
  styleUrls: ['./salas-list.component.css']
})
export class SalasListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCadastrar(): void {
    this.dialog.open(CadastrarSalaComponent,{
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
    this.dialog.open(EditarSalaComponent,{
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
    this.dialog.open(DeletarSalaComponent,{
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
