import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListAlumnosComponent } from './list-alumnos/list-alumnos.component';
import { AlumnoDetalleComponent } from './alumno-detalle/alumno-detalle.component';


@NgModule({
  imports: [
    CommonModule,HttpClientModule
  ],
  exports: [ListAlumnosComponent],
  declarations: [ListAlumnosComponent, AlumnoDetalleComponent]
})
export class AlumnosModule { }
