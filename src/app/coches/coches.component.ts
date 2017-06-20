import {Component} from '@angular/core';
import {Coche} from './coche';
// Import del componente peticiones para mostrar la información del servicio
import {PeticionesService} from '../services/peticiones.service'

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  providers: [PeticionesService]

})


export class CochesComponent{

  public coche: Coche;
  public coches:Array<Coche>;
  public articulos;

  constructor(

    private _peticionesService:PeticionesService //Cargar el componente del servicio
  ){
    this.coche = new Coche("","","");
    this.coches = [
      new Coche("seat Panda","120","Blanco"),
      new Coche("Renault","110","Azul"),

    ];

  }

  ngOnInit(){
    console.log(this._peticionesService.getPrueba());
    this._peticionesService.getArticulos().subscribe(
      result => {
         this.articulos = result;
          if(!this.articulos){
            console.log("Error en el servidor");
          }
      },
      error => {
        var err = <any>error;
        console.log(err)
      }
    )
    // Obtener la información del servicio especificacmente en la funcion getPrueba
  }

  onSubmit(){
    this.coches.push(this.coche);
    this.coche = new Coche("","","");
  }

}
