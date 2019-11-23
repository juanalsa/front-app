import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from 'src/app/classes/estudiante';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent implements OnInit {
  private estudiante:Estudiante = new Estudiante();
  private frmEnviado:boolean = false;
  private ciudades:any[] = [];
  private tiposIdentificacion:any[] = [];
  private errores:object = {};
  private hayErrores:boolean = false;

  constructor(private _estudianteService: EstudianteService, private _router: Router) {
    _estudianteService.getCiudades().subscribe( (response:any) => {      
      this.ciudades = response.data;
    });

    _estudianteService.getTiposIdentificacion().subscribe( (response:any) => {
      this.tiposIdentificacion = response.data;
    });
  }

  ngOnInit() {
  }

  registrarEstudiante() {
    this._estudianteService.crearEstudiante(this.estudiante).subscribe( response => {
      console.log(response);
      this.frmEnviado = true;
      this.estudiante = new Estudiante();
      this._router.navigate(['estudiantes']);

    }, errorResp => {
      console.log(errorResp.error);
      this.errores = errorResp.error.data;
      this.hayErrores = true;
      
    });
  }

  onSubmit() {
    this.registrarEstudiante();
  }

}
