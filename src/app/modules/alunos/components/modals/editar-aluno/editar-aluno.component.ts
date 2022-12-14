import { SalaServiceService } from './../../../../salas/services/sala-service.service';
import { AlunoServiceService } from './../../../services/aluno-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import UpdateAlunoModel from '../../../models/UpdateAluno.model';
import SalaModel from 'src/app/modules/salas/models/Sala.model';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent implements OnInit {

  salas!: SalaModel[]

  aluno: UpdateAlunoModel = new UpdateAlunoModel();

  FieldsNotNull: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<EditarAlunoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private alunoService: AlunoServiceService,
    private salaService: SalaServiceService
  ) { }

  ngOnInit(): void {
    this.getSalas();
    this.getAlunoById();
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

  getAlunoById(){
    this.alunoService.getById(this.data.alunoId).subscribe(
      res => {
        if(res){
          this.aluno.id = res.id;
          this.aluno.cpf = res.cpf;
          let date = res.dataNascimento.split("T")[0].split("-");
          this.aluno.dataNascimento = `${date[2]}/${date[1]}/${date[0]}`
          this.aluno.nome = res.nome;
          this.aluno.salaId = res.salaId;
        }
      }
    )
  }

  update(){
    this.FieldsNotNull = true;
    console.log(this.aluno.dataNascimento)
    let date = this.aluno.dataNascimento.split("/");
    this.aluno.dataNascimento = `${date[2]}-${date[1]}-${date[0]}`

    this.alunoService.update(this.aluno).subscribe(
      res => {
        if(res){
          this.FieldsNotNull = false;
          console.log(res)
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
