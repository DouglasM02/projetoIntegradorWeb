import { AlunoServiceService } from './../../services/aluno-service.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { CadastrarAlunoComponent } from '../modals/cadastrar-aluno/cadastrar-aluno.component';
import { EditarAlunoComponent } from '../modals/editar-aluno/editar-aluno.component';
import { DeletarAlunoComponent } from '../modals/deletar-aluno/deletar-aluno.component';
import AlunoModel from '../../models/Aluno.model';

@Component({
  selector: 'app-alunos-list',
  templateUrl: './alunos-list.component.html',
  styleUrls: ['./alunos-list.component.css']
})
export class AlunosListComponent implements OnInit {

  alunos!:AlunoModel[]

  constructor(public dialog: MatDialog,
    private alunoService: AlunoServiceService
    ) { }

  ngOnInit(): void {
    this.getAlunos()
  }

  getAlunos() {
    this.alunoService.getAll().subscribe(res => {
      if(res) {
        console.log(res)
        this.alunos = res
        for(let aluno of this.alunos) {
          let date = aluno.dataNascimento.split("T")[0].split("-");
          aluno.dataNascimento = `${date[2]}/${date[1]}/${date[0]}`
        }
        console.log(this.alunos)
      }
    })
  }

  openCadastrar(): void {
    this.dialog.open(CadastrarAlunoComponent,{
      width: "500px",
      height: "370px",
      disableClose: true
    })
    .afterClosed()
    .subscribe(response => {
      if(response) {
        this.getAlunos()
      }
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
