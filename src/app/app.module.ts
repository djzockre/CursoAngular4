import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing, appRoutingProviders} from './app.routing';//Creación de las rutas

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';

import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import {CochesComponent } from './coches/coches.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import {PlantillasComponent } from './plantillas/plantillas.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    ContactoComponent,
    HomeComponent,
    CochesComponent,
    ConversorPipe,
    PlantillasComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
