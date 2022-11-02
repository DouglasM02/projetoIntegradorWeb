import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-list',
  templateUrl: './alunos-list.component.html',
  styleUrls: ['./alunos-list.component.css']
})
export class AlunosListComponent implements OnInit {

  imgLogo: string = '../../../../../assets/prestech-logo-white.svg';
  imgSrcAlunos: string = '../../../../../assets/alunos-white.svg';
  imgSrcProfessores: string = '../../../../../assets/professores-white.svg'
  imgSrcMaterias: string = '../../../../../assets/materias-white.svg'
  imgSrcSalas: string = '../../../../../assets/salas-white.svg'
  mouseOver: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
