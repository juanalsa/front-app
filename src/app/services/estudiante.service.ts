import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private baseUrl:string = 'http://localhost/~jaas3088/registro-app/api/estudiantes';

  constructor(private http: HttpClient) { }

  getListaEstudiantes() {
    return this.http.get(`${this.baseUrl}`);
  }

  getEstudiante(estudianteId:number) {
    return this.http.get(`${this.baseUrl}/${estudianteId}`);
  }
}
