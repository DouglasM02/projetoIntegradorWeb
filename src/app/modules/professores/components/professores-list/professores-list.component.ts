import { ProfessorServiceService } from './../../services/professor-service.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarProfessorComponent } from '../modals/cadastrar-professor/cadastrar-professor.component';
import { DeletarProfessorComponent } from '../modals/deletar-professor/deletar-professor.component';
import { EditarProfessorComponent } from '../modals/editar-professor/editar-professor.component';
import ProfessorModel from '../../models/Professor.model';

@Component({
  selector: 'app-professores-list',
  templateUrl: './professores-list.component.html',
  styleUrls: ['./professores-list.component.css']
})
export class ProfessoresListComponent implements OnInit {

  professores!:ProfessorModel[];

  constructor(
    public dialog: MatDialog,
    private professorService: ProfessorServiceService
  ) { }

  ngOnInit(): void {
    this.getProfessores();
  }

  getProfessores() {
    this.professorService.getAll().subscribe(res => {
      if(res) {
        console.log(res)
        this.professores = res
        for(let professor of this.professores) {
          let date = professor.dataNascimento.split("T")[0].split("-");
          professor.dataNascimento = `${date[2]}/${date[1]}/${date[0]}`
        }
        console.log(this.professores)
      }
    })
  }

  openCadastrar(): void {
    this.dialog.open(CadastrarProfessorComponent,{
      width: "500px",
      height: "430px",
      disableClose: true
    })
    .afterClosed()
    .subscribe(response => {
      if(response) {
        this.getProfessores()
      }
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
      if(response) {
        this.getProfessores()
      }
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
      if(response) {
        this.getProfessores()
      }
    })
  }

}
