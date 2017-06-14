import { Component } from '@angular/core';
@Component({
  selector: 'fruta',
  templateUrl : './fruta.component.html'
})

export class FrutaComponent{
  public nombre_componente = 'Componente de fruta';
  public listado_frutas = 'Naranja, pera, manzana';
  private hola = "Soy privada";
  public nombre:string = "Fernando Ruiz";
  public edad:number =23;
  public mayorDeEdad:boolean = true;
  public trabajos:Array<any> = ['Carpintero','Albañil', 'Blabla'];



}
