import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deletar-materia',
  templateUrl: './deletar-materia.component.html',
  styleUrls: ['./deletar-materia.component.css']
})
export class DeletarMateriaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletarMateriaComponent>) { }

  ngOnInit(): void {
  }

  close(close:boolean) {
    this.dialogRef.close(close);
  }

}
