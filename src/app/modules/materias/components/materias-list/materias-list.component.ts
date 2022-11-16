import { MateriaServiceService } from './../../services/materia-service.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarMateriaComponent } from '../modals/cadastrar-materia/cadastrar-materia.component';
import { DeletarMateriaComponent } from '../modals/deletar-materia/deletar-materia.component';
import { EditarMateriaComponent } from '../modals/editar-materia/editar-materia.component';
import MateriaModel from '../../models/Materia.model';

@Component({
  selector: 'app-materias-list',
  templateUrl: './materias-list.component.html',
  styleUrls: ['./materias-list.component.css']
})
export class MateriasListComponent implements OnInit {

  materias!: MateriaModel[];

  constructor(
    public dialog: MatDialog,
    private materiaService: MateriaServiceService
  ) { }

  ngOnInit(): void {
    this.getMaterias();
  }

  getMaterias() {
    this.materiaService.getAll().subscribe(
      res => {
        if(res) {
          this.materias = res
        }
      }
    )
  }

  openCadastrar(): void {
    this.dialog.open(CadastrarMateriaComponent,{
      width: "500px",
      height: "370px",
      disableClose: true
    })
    .afterClosed()
    .subscribe(response => {
      if(response) {
        this.getMaterias()
      }
    })
  }

  openEditar(materiaId: number): void {
    this.dialog.open(EditarMateriaComponent,{
      width: "500px",
      height: "370px",
      data: {
        materiaId
      },
      disableClose: true
    })
    .afterClosed()
    .subscribe(response => {
      if(response) {
        this.getMaterias()
      }
    })
  }

  openDeletar(materiaId: number): void {
    this.dialog.open(DeletarMateriaComponent,{
      width: "500px",
      height: "190px",
      data: {
        materiaId
      },
      disableClose: true
    })
    .afterClosed()
    .subscribe(response => {
      if(response) {
        this.getMaterias()
      }
    })
  }

}
