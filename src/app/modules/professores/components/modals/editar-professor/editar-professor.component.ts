import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-professor',
  templateUrl: './editar-professor.component.html',
  styleUrls: ['./editar-professor.component.css']
})
export class EditarProfessorComponent implements OnInit {

  FieldsNotNull: boolean = false;

  constructor(public dialogRef: MatDialogRef<EditarProfessorComponent>) { }

  ngOnInit(): void {
  }

  close(close:boolean) {
    this.dialogRef.close(close);
  }

}
