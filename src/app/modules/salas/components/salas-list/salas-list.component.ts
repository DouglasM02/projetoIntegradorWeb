import { SalaServiceService } from './../../services/sala-service.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarSalaComponent } from '../modals/cadastrar-sala/cadastrar-sala.component';
import { DeletarSalaComponent } from '../modals/deletar-sala/deletar-sala.component';
import { EditarSalaComponent } from '../modals/editar-sala/editar-sala.component';
import SalaModel from '../../models/Sala.model';

@Component({
  selector: 'app-salas-list',
  templateUrl: './salas-list.component.html',
  styleUrls: ['./salas-list.component.css']
})
export class SalasListComponent implements OnInit {

  salas: SalaModel[] = [];

  constructor(
    public dialog: MatDialog,
    private salaService: SalaServiceService
  ) { }

  ngOnInit(): void {
    this.getSalas();
  }

  getSalas(){
    this.salaService.getAll().subscribe(
      res => {
        if(res){
          this.salas = res
        }
      }
    )
  }

  openCadastrar(): void {
    this.dialog.open(CadastrarSalaComponent,{
      width: "500px",
      height: "370px",
      disableClose: true
    })
    .afterClosed()
    .subscribe(response => {
      if(response) {
        this.getSalas()
      }
    })
  }

  openEditar(salaId: number): void {
    this.dialog.open(EditarSalaComponent,{
      width: "500px",
      height: "370px",
      data: {
        salaId
      },
      disableClose: true
    })
    .afterClosed()
    .subscribe(response => {
      if(response) {
        this.getSalas()
      }
    })
  }

  openDeletar(salaId: number): void {
    this.dialog.open(DeletarSalaComponent,{
      width: "500px",
      height: "190px",
      data: {
        salaId
      },
      disableClose: true
    })
    .afterClosed()
    .subscribe(response => {
      if(response) {
        this.getSalas()
      }
    })
  }

}
