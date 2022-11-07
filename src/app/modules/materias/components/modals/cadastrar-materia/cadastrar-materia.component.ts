import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastrar-materia',
  templateUrl: './cadastrar-materia.component.html',
  styleUrls: ['./cadastrar-materia.component.css']
})
export class CadastrarMateriaComponent implements OnInit {

  FieldsNotNull: boolean = false;

  constructor(public dialogRef: MatDialogRef<CadastrarMateriaComponent>) { }

  ngOnInit(): void {
  }

  close(close:boolean) {
    this.dialogRef.close(close);
  }

}
