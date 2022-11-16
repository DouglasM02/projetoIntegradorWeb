import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import AlunoModel from '../models/Aluno.model';
import CreateAlunoModel from '../models/CreateAluno.model';
import UpdateAlunoModel from '../models/UpdateAluno.model';

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

  getById(id:number): Observable<AlunoModel> {
    return this.http.get<AlunoModel>(`${this.BaseApi}GetById/${id}`);
  }

  delete(id:number): Observable<string> {
    return this.http.delete<string>(`${this.BaseApi}Delete/${id}`);
  }

  update(aluno: UpdateAlunoModel): Observable<AlunoModel> {
    return this.http.put<AlunoModel>(`${this.BaseApi}Update`, aluno)
  }

}
