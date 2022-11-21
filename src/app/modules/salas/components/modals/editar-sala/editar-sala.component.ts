import { SalaServiceService } from './../../../services/sala-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import UpdateSalaModel from '../../../models/UpdateSala.model';
import ProfessorModel from 'src/app/modules/professores/models/Professor.model';
import { ProfessorServiceService } from 'src/app/modules/professores/services/professor-service.service';

@Component({
  selector: 'app-editar-sala',
  templateUrl: './editar-sala.component.html',
  styleUrls: ['./editar-sala.component.css']
})
export class EditarSalaComponent implements OnInit {

  sala: UpdateSalaModel = new UpdateSalaModel();
  professores!: ProfessorModel[];

  FieldsNotNull: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<EditarSalaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private salaService: SalaServiceService,
    private professorSerivce: ProfessorServiceService
  ) { }

  ngOnInit(): void {
    this.getProfessores();
    this.getById();
  }

  getById(){
    this.salaService.getById(this.data.salaId).subscribe(
      res => {
        if(res){
          this.sala.codigo = res.codigo;
          this.sala.id = res.id;
          this.sala.professorId = res.professorId;
        }
      },
      ex => {
        console.log(ex)
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

  editar(){
    this.FieldsNotNull = true;
    this.salaService.update(this.sala).subscribe(
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
