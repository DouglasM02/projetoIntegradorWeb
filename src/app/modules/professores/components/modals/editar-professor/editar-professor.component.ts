import { ProfessorServiceService } from './../../../services/professor-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import UpdateProfessorModel from '../../../models/UpdateProfessor.model';

@Component({
  selector: 'app-editar-professor',
  templateUrl: './editar-professor.component.html',
  styleUrls: ['./editar-professor.component.css']
})
export class EditarProfessorComponent implements OnInit {

  professor: UpdateProfessorModel = new UpdateProfessorModel();

  FieldsNotNull: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<EditarProfessorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private professorService: ProfessorServiceService
  ) { }

  ngOnInit(): void {
    this.getProfessorById();
  }

  getProfessorById(){
    this.professorService.getById(this.data.professorId).subscribe(
      res => {
        if(res) {
          this.professor.id = res.id;
          this.professor.cpf = res.cpf;
          this.professor.graduacao = res.graduacao;
          this.professor.nome = res.nome;
          let date = res.dataNascimento.split("T")[0].split("-");
          this.professor.dataNascimento = `${date[2]}/${date[1]}/${date[0]}`
        }
      }
    )
  }

  update() {
    this.FieldsNotNull = true;
    console.log(this.professor.dataNascimento)
    let date = this.professor.dataNascimento.split("/");
    this.professor.dataNascimento = `${date[2]}-${date[1]}-${date[0]}`
    this.professorService.update(this.professor).subscribe(
      res => {
        if(res){
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
