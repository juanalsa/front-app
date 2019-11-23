import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from 'src/app/classes/estudiante';


@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit {

  private id:number;
  private estudiante:Estudiante;
  private frmEnviado:boolean = false;
  private ciudades:any[] = [];
  private tiposIdentificacion:any[] = [];
  private errores:object = {};
  private hayErrores:boolean = false;

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _estudianteService: EstudianteService) { 
    this.id = _activatedRoute.snapshot.params['id'];

    _estudianteService.getEstudiante(this.id).subscribe( (response:any) => {
      this.estudiante = response.data[0];
      console.log(this.estudiante);

      _estudianteService.getCiudades().subscribe( (response:any) => {      
        this.ciudades = response.data;
        
        for (const ciudad of this.ciudades) {
          if (ciudad.nombre == this.estudiante.ciudad_ncto) {
            this.estudiante.ciudad_ncto_id = ciudad.id;
          }
        }
        
      });
  
      _estudianteService.getTiposIdentificacion().subscribe( (response:any) => {
        this.tiposIdentificacion = response.data;
        
        for (const tipoId of this.tiposIdentificacion) {
          if(tipoId.abreviatura == this.estudiante.abr_identificacion) {
            this.estudiante.tipo_identificacion_id = tipoId.id;
          }
        }
      });

    }, error => {
      console.log(error);

    });

  }

  ngOnInit() {
  }

  editarEstudiante() {
    this._estudianteService.editarEstudiante(this.id, this.estudiante).subscribe((response:any) => {
      console.log(response.data);
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
    this.editarEstudiante();
  }

}
