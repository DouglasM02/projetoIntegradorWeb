import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import CreateSala from '../models/CreateSala.model';
import SalaModel from '../models/Sala.model';
import UpdateSalaModel from '../models/UpdateSala.model';

@Injectable({
  providedIn: 'root'
})
export class SalaServiceService {

  private readonly BaseApi = environment.APIPath+"Sala/"

  constructor(private http: HttpClient) { }

  create(sala: CreateSala): Observable<SalaModel> {
    return this.http.post<SalaModel>(`${this.BaseApi}Create`, sala)
  }

  getAll(): Observable<SalaModel[]> {
    return this.http.get<SalaModel[]>(`${this.BaseApi}GetAll`);
  }

  getById(id:number): Observable<SalaModel> {
    return this.http.get<SalaModel>(`${this.BaseApi}GetById/${id}`);
  }

  delete(id:number): Observable<string> {
    return this.http.delete<string>(`${this.BaseApi}Delete/${id}`);
  }

  update(sala: UpdateSalaModel): Observable<SalaModel> {
    return this.http.put<SalaModel>(`${this.BaseApi}Update`, sala)
  }
}
