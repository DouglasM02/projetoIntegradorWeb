import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deletar-sala',
  templateUrl: './deletar-sala.component.html',
  styleUrls: ['./deletar-sala.component.css']
})
export class DeletarSalaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletarSalaComponent>) { }

  ngOnInit(): void {
  }

  close(close:boolean) {
    this.dialogRef.close(close);
  }

}
