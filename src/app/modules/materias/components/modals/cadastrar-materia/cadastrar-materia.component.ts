import { MateriaServiceService } from './../../../services/materia-service.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import CreateMateriaModel from '../../../models/CreateMateria.model';

@Component({
  selector: 'app-cadastrar-materia',
  templateUrl: './cadastrar-materia.component.html',
  styleUrls: ['./cadastrar-materia.component.css']
})
export class CadastrarMateriaComponent implements OnInit {

  FieldsNotNull: boolean = false;

  materia: CreateMateriaModel = new CreateMateriaModel();

  constructor(
    public dialogRef: MatDialogRef<CadastrarMateriaComponent>,
    private materiaService: MateriaServiceService
  ) { }

  ngOnInit(): void {
  }

  create() {
    this.materiaService.create(this.materia).subscribe(
      res => {
        if(res) {
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
