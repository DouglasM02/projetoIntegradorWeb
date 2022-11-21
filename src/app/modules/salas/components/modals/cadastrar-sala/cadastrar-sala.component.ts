import { SalaServiceService } from './../../../services/sala-service.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import CreateSala from '../../../models/CreateSala.model';

@Component({
  selector: 'app-cadastrar-sala',
  templateUrl: './cadastrar-sala.component.html',
  styleUrls: ['./cadastrar-sala.component.css']
})
export class CadastrarSalaComponent implements OnInit {

  sala: CreateSala = new CreateSala();

  FieldsNotNull: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CadastrarSalaComponent>,
    private salaService: SalaServiceService
  ) { }

  ngOnInit(): void {
  }

  create(){
    this.salaService.create(this.sala).subscribe(
      res => {
        if(res){
          console.log(res)
          this.close(true)
        }
      },
      ex => {
        console.log(ex)
      }
    )
  }

  close(close:boolean) {
    this.dialogRef.close(close);
  }

}
