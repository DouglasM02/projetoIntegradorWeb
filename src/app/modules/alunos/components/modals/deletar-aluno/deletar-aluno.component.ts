import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deletar-aluno',
  templateUrl: './deletar-aluno.component.html',
  styleUrls: ['./deletar-aluno.component.css']
})
export class DeletarAlunoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletarAlunoComponent>) { }

  ngOnInit(): void {
  }

  close(close:boolean) {
    this.dialogRef.close(close);
  }

}
