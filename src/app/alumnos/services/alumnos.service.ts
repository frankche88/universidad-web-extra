import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


export interface Alumno {
  id: string;
  nombre: string;
  apellido: string;
  tipo: string;
  montoBeca: number;
}

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private apiUrl = environment.apiUrl;
  private alumnoUrl:string;

  constructor(private http: HttpClient) { 
    this.alumnoUrl = this.apiUrl + 'alumnos';
  }
  
  getAlumno(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.alumnoUrl).pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  
  getAlumnoByType(type: string): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.alumnoUrl + '/' + type).pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  
  
  

  getAlumnoResponse(): Observable<HttpResponse<Alumno[]>> {
    return this.http.get<Alumno[]>(
      this.alumnoUrl, { observe: 'response' });
  }
  
  makeIntentionalError() {
    return this.http.get('not/a/real/url')
      .pipe(
        catchError(this.handleError)
      );
  }
  
  
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  
  
}


