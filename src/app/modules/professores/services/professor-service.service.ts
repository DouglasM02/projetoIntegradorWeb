import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import CreateProfessorModel from '../models/CreateProfessor.model';
import ProfessorModel from '../models/Professor.model';
import UpdateProfessorModel from '../models/UpdateProfessor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorServiceService {

  private readonly BaseApi = environment.APIPath+"Professor/"

  constructor(private http: HttpClient) { }

  create(professor: CreateProfessorModel): Observable<ProfessorModel> {
    return this.http.post<ProfessorModel>(`${this.BaseApi}Create`, professor)
  }

  getAll(): Observable<ProfessorModel[]> {
    return this.http.get<ProfessorModel[]>(`${this.BaseApi}GetAll`);
  }

  getById(id:number): Observable<ProfessorModel> {
    return this.http.get<ProfessorModel>(`${this.BaseApi}GetById/${id}`);
  }

  delete(id:number): Observable<string> {
    return this.http.delete<string>(`${this.BaseApi}Delete/${id}`);
  }

  update(professor: UpdateProfessorModel): Observable<ProfessorModel> {
    return this.http.put<ProfessorModel>(`${this.BaseApi}Update`, professor)
  }

}
