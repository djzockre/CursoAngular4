import {Component} from '@angular/core';


@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html',


})
export class PlantillasComponent{

  public titulo;
  public administrador;

  constructor(){

    this.titulo = "Plantillas Ng Template en angular";
    this.administrador = true;
  }

  cambiar(value){
    this.administrador = value;
  }
}
