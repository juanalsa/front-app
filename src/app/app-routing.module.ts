import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarEstudianteComponent } from './components/listar-estudiante/listar-estudiante.component';
import { CrearEstudianteComponent } from './components/crear-estudiante/crear-estudiante.component';
import { EditarEstudianteComponent } from './components/editar-estudiante/editar-estudiante.component';
import { DetalleEstudianteComponent } from './components/detalle-estudiante/detalle-estudiante.component';

const routes: Routes = [
  { path: '', redirectTo: 'estudiantes', pathMatch: 'full' },
  { path: 'estudiantes', component: ListarEstudianteComponent },
  { path: 'crear-estudiante', component: CrearEstudianteComponent },
  { path: 'editar-estudiante/:id', component: EditarEstudianteComponent },
  { path: 'detalle-estudiante/:id', component: DetalleEstudianteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
