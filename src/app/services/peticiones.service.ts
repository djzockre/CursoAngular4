import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
// Librerias para que funcione correcetamente todo

@Injectable()
export class PeticionesService{

  public url:string;

  //Creación de API REST
  constructor(private _http:Http){
    this.url = "https://jsonplaceholder.typicode.com/posts";
  }

  getPrueba(){
    return "Hola mundo desde el servicio";
    //Creamos una funcion para comprobar si funciona el servicio
  }

  //Peticion por get con ajax
  getArticulos(){

    return this._http.get(this.url)
            .map(res => res.json());
            // Devuelve una coleccion de objetos usable dentro del código

  }

}
