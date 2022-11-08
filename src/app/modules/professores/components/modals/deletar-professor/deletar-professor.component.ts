import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deletar-professor',
  templateUrl: './deletar-professor.component.html',
  styleUrls: ['./deletar-professor.component.css']
})
export class DeletarProfessorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletarProfessorComponent>) { }

  ngOnInit(): void {
  }

  close(close:boolean) {
    this.dialogRef.close(close);
  }

}
