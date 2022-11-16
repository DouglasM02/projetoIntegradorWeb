import { ProfessorServiceService } from './../../../../professores/services/professor-service.service';
import { MateriaServiceService } from './../../../services/materia-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import ProfessorModel from 'src/app/modules/professores/models/Professor.model';
import UpdateMateriaModel from '../../../models/UpdateMateria.model';

@Component({
  selector: 'app-editar-materia',
  templateUrl: './editar-materia.component.html',
  styleUrls: ['./editar-materia.component.css']
})
export class EditarMateriaComponent implements OnInit {

  professores!: ProfessorModel[]

  materia: UpdateMateriaModel = new UpdateMateriaModel();

  FieldsNotNull: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<EditarMateriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private materiaService: MateriaServiceService,
    private professorSerivce: ProfessorServiceService
  ) { }

  ngOnInit(): void {
    this.getProfessores();
    this.getMateriaById();
  }

  getMateriaById() {
    this.materiaService.getById(this.data.materiaId).subscribe(
      res => {
        if(res){
          this.materia.id = res.id;
          this.materia.nome = res.nome;
          this.materia.professorId = res.professorId
        }
      }
    )
  }

  getProfessores() {
    this.professorSerivce.getAll().subscribe(
      res => {
        if(res){
          this.professores = res;
        }
      }
    )
  }

  update(){
    if(this.materia.professorId === undefined || this.materia.professorId === null || this.materia.professorId.toString() === '0') {
      this.materia.professorId = null;
    }
    this.FieldsNotNull = true;
    console.log(this.materia)
    this.materiaService.update(this.materia).subscribe(
      res => {
        if(res){
          this.FieldsNotNull = false;
          this.close(true);
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
