import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estudiante } from '../classes/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private baseUrl:string = 'http://localhost/~jaas3088/registro-app/';

  constructor(private http: HttpClient) { }

  /**
   * Realiza la petición para el registro de un estudiante
   * @param estudiante Objeto Estudiante con los datos de la petición
   */
  crearEstudiante(estudiante: Estudiante) {
    return this.http.post(`${this.baseUrl}api/estudiantes`, estudiante);
  }

  /**
   * Realiza la petición para la modificación de un estudiante
   * @param estudianteId ID del estudiante a modificar
   * @param estudiante Objeto Estudiante con los datos de la petición
   */
  editarEstudiante(estudianteId: number, estudiante: Estudiante) {
    return this.http.put(`${this.baseUrl}api/estudiantes/${estudianteId}`, estudiante);
  }

  /**
   * Realiza la petición para la eliminación de un estudiante
   * @param estudianteId ID del estudiante a eliminar
   */
  eliminarEstudiante(estudianteId: number) {
    return this.http.delete(`${this.baseUrl}api/estudiantes/${estudianteId}`);
  }

  /**
   * Obtiene la lista de todos los estudiantes
   */
  getListaEstudiantes() {
    return this.http.get(`${this.baseUrl}api/estudiantes`);
  }

  /**
   * Obtiene los datos de un estudiante por ID
   * @param estudianteId ID del estudiante
   */
  getEstudiante(estudianteId: number) {
    return this.http.get(`${this.baseUrl}api/estudiantes/${estudianteId}`);
  }

  /**
   * Obtiene los datos de las ciudades
   */
  getCiudades() {
    return this.http.get(`${this.baseUrl}api/ciudades`);
  }

  /**
   * Obtiene los datos de los tipos de identificación
   */
  getTiposIdentificacion() {
    return this.http.get(`${this.baseUrl}api/tiposidentificacion`);
  }
}
