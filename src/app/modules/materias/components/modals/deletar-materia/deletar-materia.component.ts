import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MateriaServiceService } from '../../../services/materia-service.service';

@Component({
  selector: 'app-deletar-materia',
  templateUrl: './deletar-materia.component.html',
  styleUrls: ['./deletar-materia.component.css']
})
export class DeletarMateriaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletarMateriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private materiaService: MateriaServiceService,
  ) { }

  ngOnInit(): void {
  }

  deletar() {
    this.materiaService.delete(this.data.materiaId).subscribe(
      res => {
        if(res){
          this.close(true);
        }
      },
      ex => {
        if(ex.error.text === "Materia deletada com sucesso"){
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
