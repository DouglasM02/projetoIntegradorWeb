import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import AlunoModel from '../models/Aluno.model';
import CreateAlunoModel from '../models/CreateAluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoServiceService {

  private readonly BaseApi = environment.APIPath+"Aluno/"

  constructor(private http: HttpClient) { }

  create(aluno: CreateAlunoModel): Observable<AlunoModel> {
    return this.http.post<AlunoModel>(`${this.BaseApi}Create`, aluno)
  }

  getAll(): Observable<AlunoModel[]> {
    return this.http.get<AlunoModel[]>(`${this.BaseApi}GetAll`);
  }

}
