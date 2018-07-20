import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AlumnosModule } from './alumnos/alumnos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AlumnosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
