import { AlunoServiceService } from './../../../services/aluno-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deletar-aluno',
  templateUrl: './deletar-aluno.component.html',
  styleUrls: ['./deletar-aluno.component.css']
})
export class DeletarAlunoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletarAlunoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private alunoService: AlunoServiceService
    ) { }

  ngOnInit(): void {
  }

  deletar() {
    this.alunoService.delete(this.data.alunoId).subscribe(
      res => {
        if(res){
          this.close(true);
        }
      },
      ex => {
        if(ex.error.text === "Aluno deletado com sucesso"){
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
