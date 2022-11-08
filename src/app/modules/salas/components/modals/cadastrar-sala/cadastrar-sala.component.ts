import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastrar-sala',
  templateUrl: './cadastrar-sala.component.html',
  styleUrls: ['./cadastrar-sala.component.css']
})
export class CadastrarSalaComponent implements OnInit {

  FieldsNotNull: boolean = false;

  constructor(public dialogRef: MatDialogRef<CadastrarSalaComponent>) { }

  ngOnInit(): void {
  }

  close(close:boolean) {
    this.dialogRef.close(close);
  }

}
