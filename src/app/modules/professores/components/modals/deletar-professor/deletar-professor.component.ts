import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfessorServiceService } from '../../../services/professor-service.service';

@Component({
  selector: 'app-deletar-professor',
  templateUrl: './deletar-professor.component.html',
  styleUrls: ['./deletar-professor.component.css']
})
export class DeletarProfessorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletarProfessorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private professorService: ProfessorServiceService
  ) { }

  ngOnInit(): void {
  }

  deletar() {
    this.professorService.delete(this.data.professorId).subscribe(
      res => {
        if(res){
          this.close(true);
        }
      },
      ex => {
        if(ex.error.text === "Professor deletado com sucesso"){
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
