import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastrar-professor',
  templateUrl: './cadastrar-professor.component.html',
  styleUrls: ['./cadastrar-professor.component.css']
})
export class CadastrarProfessorComponent implements OnInit {

  FieldsNotNull: boolean = false;

  constructor(public dialogRef: MatDialogRef<CadastrarProfessorComponent>) { }

  ngOnInit(): void {
  }

  close(close:boolean) {
    this.dialogRef.close(close);
  }

}
