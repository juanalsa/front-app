import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from 'src/app/interfaces/estudiante';

@Component({
  selector: 'app-detalle-estudiante',
  templateUrl: './detalle-estudiante.component.html',
  styleUrls: ['./detalle-estudiante.component.css']
})
export class DetalleEstudianteComponent implements OnInit {
  private id:number;
  private estudiante:Estudiante;

  constructor(private _activatedRoute:ActivatedRoute, private _router:Router, private _estudianteService: EstudianteService) { 
    this.id = _activatedRoute.snapshot.params['id'];

    _estudianteService.getEstudiante(this.id).subscribe( (response:any) => {
      this.estudiante = response.data[0];

    }, error => {
      console.log(error);
      
    });
  }

  ngOnInit() {
  }

  verListadoEstudiantes() {
    this._router.navigate(['estudiantes']);
  }

}
