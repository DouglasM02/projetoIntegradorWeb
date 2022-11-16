import { ProfessorServiceService } from './../../../services/professor-service.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import CreateProfessorModel from '../../../models/CreateProfessor.model';

@Component({
  selector: 'app-cadastrar-professor',
  templateUrl: './cadastrar-professor.component.html',
  styleUrls: ['./cadastrar-professor.component.css']
})
export class CadastrarProfessorComponent implements OnInit {

  FieldsNotNull: boolean = false;

  professor: CreateProfessorModel = new CreateProfessorModel();

  constructor(
    public dialogRef: MatDialogRef<CadastrarProfessorComponent>,
    private professorService: ProfessorServiceService
  ) { }

  ngOnInit(): void {
  }

  create() {
    this.FieldsNotNull = true
    let date = this.professor.dataNascimento.split("/");
    this.professor.dataNascimento = `${date[2]}-${date[1]}-${date[0]}`
    this.professorService.create(this.professor).subscribe(
      res => {
        if(res) {
          this.close(true)
        }
      },
      ex => {
        console.log(ex)
      }
    )
  }

  close(close:boolean) {
    this.dialogRef.close(close);
  }

}
