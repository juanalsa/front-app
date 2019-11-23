import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CrearEstudianteComponent } from './components/crear-estudiante/crear-estudiante.component';
import { ListarEstudianteComponent } from './components/listar-estudiante/listar-estudiante.component';
import { EditarEstudianteComponent } from './components/editar-estudiante/editar-estudiante.component';
import { DetalleEstudianteComponent } from './components/detalle-estudiante/detalle-estudiante.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrearEstudianteComponent,
    ListarEstudianteComponent,
    EditarEstudianteComponent,
    DetalleEstudianteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
