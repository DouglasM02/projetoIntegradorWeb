import { SalaServiceService } from './../../../services/sala-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deletar-sala',
  templateUrl: './deletar-sala.component.html',
  styleUrls: ['./deletar-sala.component.css']
})
export class DeletarSalaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletarSalaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private salaService: SalaServiceService
  ) { }

  ngOnInit(): void {
  }

  deletar() {
    this.salaService.delete(this.data.salaId).subscribe(
      res => {
        if(res){
          this.close(true);
        }
      },
      ex => {
        if(ex.error.text === "Sala deletada com sucesso"){
          this.close(true)
        }
        else {
          console.log(ex)
        }
      }
    )
  }

  close(close:boolean) {
    this.dialogRef.close(close);
  }

}
