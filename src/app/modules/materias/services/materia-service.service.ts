import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import CreateMateriaModel from '../models/CreateMateria.model';
import MateriaModel from '../models/Materia.model';
import UpdateMateriaModel from '../models/UpdateMateria.model';

@Injectable({
  providedIn: 'root'
})
export class MateriaServiceService {

  private readonly BaseApi = environment.APIPath+"Materia/"

  constructor(private http: HttpClient) { }

  create(materia: CreateMateriaModel): Observable<MateriaModel> {
    return this.http.post<MateriaModel>(`${this.BaseApi}Create`, materia)
  }

  getAll(): Observable<MateriaModel[]> {
    return this.http.get<MateriaModel[]>(`${this.BaseApi}GetAll`);
  }

  getById(id:number): Observable<MateriaModel> {
    return this.http.get<MateriaModel>(`${this.BaseApi}GetById/${id}`);
  }

  delete(id:number): Observable<string> {
    return this.http.delete<string>(`${this.BaseApi}Delete/${id}`);
  }

  update(materia: UpdateMateriaModel): Observable<MateriaModel> {
    return this.http.put<MateriaModel>(`${this.BaseApi}Update`, materia)
  }

}
