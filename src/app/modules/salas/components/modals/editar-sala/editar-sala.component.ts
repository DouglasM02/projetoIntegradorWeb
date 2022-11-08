import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-sala',
  templateUrl: './editar-sala.component.html',
  styleUrls: ['./editar-sala.component.css']
})
export class EditarSalaComponent implements OnInit {

  FieldsNotNull: boolean = false;

  constructor(public dialogRef: MatDialogRef<EditarSalaComponent>) { }

  ngOnInit(): void {
  }

  close(close:boolean) {
    this.dialogRef.close(close);
  }

}
