import { Component, OnInit } from '@angular/core';

import { Alumno, AlumnosService } from '../services/alumnos.service';


@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  providers: [ AlumnosService ],
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit {

  error: any;
  headers: string[];
  alumnos: Alumno[];

  constructor(private alumnosService: AlumnosService) {}

  clear() {
    this.alumnos = undefined;
    this.error = undefined;
    this.headers = undefined;
  }
  
  showAlumnos() {
  
    this.alumnosService.getAlumno()
      .subscribe(
        (data: Alumno[]) => this.alumnos = data, // success path
        error => this.error = error // error path
      );
  }
  
  showAlumnosByType(type: string) {
    this.alumnosService.getAlumnoByType(type)
      .subscribe(
        (data: Alumno[]) => this.alumnos = data, // success path
        error => this.error = error // error path
      );
  }
  
  
  showAlumnoResponse() {
    this.alumnosService.getAlumnoResponse()
      // resp is of type `HttpResponse<Alumno>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Alumno`.
        this.alumnos = { ... resp.body };
      });
  }
  makeError() {
    this.alumnosService.makeIntentionalError().subscribe(null, error => this.error = error );
  }
  

  ngOnInit() {
  }

}
