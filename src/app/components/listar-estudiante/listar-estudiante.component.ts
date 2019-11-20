import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from 'src/app/interfaces/estudiante';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-estudiante',
  templateUrl: './listar-estudiante.component.html',
  styleUrls: ['./listar-estudiante.component.css']
})
export class ListarEstudianteComponent implements OnInit {

  private estudiantes:Estudiante[] = [];

  constructor(private _estudianteService: EstudianteService, private _router: Router) { 

  }

  ngOnInit() {
    this.cargarDatosEstudiantes();
  }

  cargarDatosEstudiantes() {
    this._estudianteService.getListaEstudiantes().subscribe( (response:any) => {
      this.estudiantes = response.data;
      // console.log(this.estudiantes);
    });
  }

  eliminarEstudiante(id:number) {

  }

  verInfoEstudiante(id:number) {
    // console.log(id);
    this._router.navigate(['/detalle-estudiante', id]);
  }

}
