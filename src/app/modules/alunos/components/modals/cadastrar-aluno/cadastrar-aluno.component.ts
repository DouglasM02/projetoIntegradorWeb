import { AlunoServiceService } from './../../../services/aluno-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import CreateAlunoModel from '../../../models/CreateAluno.model';

@Component({
  selector: 'app-cadastrar-aluno',
  templateUrl: './cadastrar-aluno.component.html',
  styleUrls: ['./cadastrar-aluno.component.css']
})
export class CadastrarAlunoComponent implements OnInit {

  FieldsNotNull: boolean = false;
  aluno: CreateAlunoModel = new CreateAlunoModel();

  constructor(public dialogRef: MatDialogRef<CadastrarAlunoComponent>,
    private alunoService: AlunoServiceService
    ) { }

  ngOnInit(): void {}

  close(close:boolean) {
    this.dialogRef.close(close);
  }

  cadastrar() {
    this.FieldsNotNull = true
    let date = this.aluno.dataNascimento.split("/");
    this.aluno.dataNascimento = `${date[2]}-${date[1]}-${date[0]}`
    this.alunoService.create(this.aluno).subscribe(res => {
      if(res) {
        console.log(res)
        this.FieldsNotNull = false;
        this.close(true)
      }
    },
    ex => {
      console.log(ex)
    })

  }

}
